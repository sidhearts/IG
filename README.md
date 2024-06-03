# Instagram Stories

## Description

This is a simplified version of instagram stories where user can see stories which are served from node.js server

### Local Development

#### Server

- Move to server dir - `cd server/`
- Switch version of node - `nvm use`
- Install packages - `npm install`
- Run dev server - `npm run dev`
- Server will be running at port `8000` (by default).

#### Client

- Move to ig-client dir - `cd ig-client/`
- Create `env.local` at the root of your client side project i.e. `ig-client`. Use `.env.local.template` to populate the file.
- Switch version of node - `nvm use`
- Install packages - `npm install`
- Run dev server - `npm run dev`
- Server will be running at port `3000` (by default).

### Assumptions

- Considered story view time as 5 seconds.
