# Astropress 🧑‍🚀

Astropress es un blog de astropress, basado en Astro y tailwindcss.

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

## ejecutar

```sh
npm run dev
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 estructura del proyecto

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
