interface IWPAPI {
  query: string;
  variables?: object;
  strategy?: string;
}

// función que se encarga de conectar con el WordPress y devolver los datos
/*
la variable query es el query que se va a ejecutar en el WordPress, y variables es un objeto, opcional, con los variables que se van a pasar a la query.
*/

/*
Por ejemplo, si queremos obtener los posts de un tema, el query seria

* query { posts(where: { post_type: post, taxonomy: theme, term: my-theme }) { nodes { title, excerpt, slug } } }"
* variables seria { "my-theme": "my-theme" }
* strategy: "query" indica que se va a ejecutar el query, y "uris" indica que se va a obtener los uris de los posts.
*/

export async function wpAPI ({ query, variables = {}, strategy = "query" }: IWPAPI) {
  const res = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  }

  const { data } = await res.json()

  if (strategy === "query") {
    return data
  }

  if (strategy === "uris" && typeof data === "object") {
    const uris = Object.values(data)
      .reduce(function (acc: any[], currentValue: unknown) {
        return acc.concat((currentValue as any).nodes)
      }, [])
      .filter((node) => node.uri !== null)
      .map((node) => {
        let trimmedURI = node.uri.substring(1)
        trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1)
        return {
          params: {
            uri: trimmedURI
          }
        }
      })
    return uris
  }
}