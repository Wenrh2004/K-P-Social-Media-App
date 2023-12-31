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
## Installing Nuxt3
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
## Installing TailWindCSS
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

## App overview
6. Page Structure
> ./app.vue  
> * Left sidebar  
> * Main content  
> * Right sidebar

## Starting left sidebar
7. Left Sidebar Components
> Create Vue components
> ```bash
> mdkir ./components/Sidebar/Left # Place the sidebar components
> touch index.vue # Parent component in Left sidebar
> touch Tab.vue # Subcomponents in Left sidebar

7. Create animation effects
> ```bash
>mdkir ./composables
>touch useTailwindConfig.js
>
># ./composables/useTailwindConfig.js
>export default () => {
>    return {
>        defaultTransition: 'transition ease-in-out duration-350'
>    }
>}
>
># ./components/Left/index.vue
>const { defaultTransition } = useTailwindConfig() # Registration component
>:class="defaultTransition" # Using the component
> ```

8. Use heroicon for Vue
>```
># install heroicon for Vue
>npm install @heroicons/vue
>
># using HomeIcon in ./components/Left/index.vue
># import heroicons/vue
>import { HomeIcon } from "@heroicons/vue/20/solid";
># use HomeIcon
><HomeIcon /> # Place in <div>
>```

## Starting right sidebar
9. Home Status
>```bash
># code in ./components/Sidebar/Left/Tab.vue
>const props = defineProps({
>    active: { # <SidebarLeftTab> in the parent component which in ./compents/Sidebar/Left/index.vue.
>        type:Boolean,
>        default:false
>    }
>})
>
>const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal') # <div> in the subcompent which in ./compents/Sidebar/Left/Tab.vue
>```

10. Right Sidebar Components
> ```bush
> # box
> ./components/Right/index.vue
> # Subcomponents
> ./components/Right/PreviewCard
> # index.vue // Some fixed content
> # index.vue // For displaying dynamic data

## Creating main section
> * UI
> ```bush
># ./components/Spinner.vue
>A loading animation
># ./components/MainSection.vue
>Display data
># ./pages/index.vue
>Status Management

>* Reconfiguring the server
>```bush
># ./server/api/auto/register.post.js
>Handling post requests
>```

## Prisma setup and starting with auth and nitro server
> * Install prisma
>```bash
># Install prisma
>npm i prisma 
>
>npx prisma # prisma help
># Init
>npx prisma init # prisma init
>```
> * Linking mongodb databases
>```bash
># ./.env
>DATABASE_URL="mongodb+srv://<username>:<password>@mongdbURL/DatabaseName"
>```
> * Creating databases
>```js
>// ./prisma/schema.prisma
>// Setting the data type
>model User {
>     id           String  @id @default(auto()) @map("_id") @db.ObjectId
>    email        String
>    name         String?
>    username     String  @unique
>    password     String
>    profileImage String?
>
>    createdAt    DateTime       @default(now())
>    updatedAt    DateTime       @updatedAt
>    refreshToken RefreshToken[]
>}
>```
>```bash
># Push by Prisma
>npx Prisma push
>```
> * Database management  
>> * mdkir ./db to management database
>> * touch index.js to index ways
>> * touch user.js to management user
> * Linking the dates in defferent form collections
>> * ./tranformers
> * Token
>```bash
>npm i jwt
>```
> * Post professional work
>> * Register
>>> * if one is null is not
>>>```js
>>>     if (!username || !email || !password || !repeatPassword || !name ) {
>>>        return sendError(event, createError({
>>>            statusCode: 400,
>>>            statusMessage: 'Invalid params'
>>>        }))
>>>    }
>>>
>>>    if (password !== repeatPassword) {
>>>        return sendError(event,createError({
>>>            statusCode: 400,
>>>            statusMessage: 'Passwords do not match'
>>>        }))
>>>    }

>> * Login
>>> * Date is not null
>>> * The user is not registered
>>> * Compare passwords
>>> * Gennerate Tokena
>>>> * Set token
>>>>> * Gennerate Tokena && Refresh token
>>>> * Save token inside db && Add http only cookie