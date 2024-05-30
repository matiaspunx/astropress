# Astropress 🧑‍🚀

Astropress es un punto de partida para crear sitios web con Astro y WordPress.

## 🚀 Instalación

```sh
git clone https://github.com/astropress/astropress.git
cd astropress
```

```sh
npm install
```

## crear un archivo `.env` y poner la url de la api de wordpress

```sh
WORDPRESS_API_URL = ""
```

En este proyecto usamos WPGraphQL para interactuar con la API de WordPress. La url de la API seria algo asi: `https://example.com/graphql`.

Pueden instalarlo desde aca: https://wordpress.org/plugins/wp-graphql/

## ejecutar

```sh
npm run dev
```

La integración con Tailwind ya viene incluida en el proyecto, por lo que podés usar cualquier componente de tailwind.

## 🚀 Estructura del proyecto

Dentro de tu proyecto Astro, verás los siguientes directorios y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página es expuesta como una ruta basada en su nombre de archivo.

No hay especial sobre `src/components/`, pero es donde nos gusta colocar cualquier componente Astro/React/Vue/Svelte/Preact.

Cualquier archivo estático, como imágenes, se puede colocar en el directorio `public/`.

## 🧞 Comandos

Todos los comandos se ejecutan desde el directorio raíz del proyecto, desde un terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Si necesitan mas información

Pueden revisar [la documentación de Astro](https://docs.astro.build) o unirse al [servidor de Discord](https://astro.build/chat).
