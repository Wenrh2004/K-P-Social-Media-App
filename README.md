# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Development process
1. nuxt project init
```bash
# nuxt init
npx nuxi init twitter
```

2. npm noode modules install
```bash
# npm install
npm i
```

3. install tailwindcss
```bash
# npm install tailwindcss
npm install -D @nuxtjs.tailwindcss
```

4. tailwindcss init
```bash
# Registration tailwindcss
# ./nuxt.config.ts
modules:['@nuxtjs/tailwindcss']

# tailwindcss init
npx tailwindcss init
```

5. Create Darkmode
```bash
# Darkmode in div
:class="{'dark':darkMode}"

# Mode switching
const darkMode = ref(true/false)
```

6. Create Sidebar
> ./app.vue  
> * Left sidebar  
> Left sidebar component `<SidebarLeft />`
> * Main content  
> * Right sidebar

> Create Vue components
> ```bash
> mdkir ./components/Sidebar # Place the sidebar components
> touch Left.vue # Left sidebar component

