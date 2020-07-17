## ✨ React/Tailwind Todo App

---

### A simple react todo app with the following features:

- Tailwind CSS to handle UI
- Local JSON api/endpoint to simulate a server environment for todo CRUD operations
- Works with/without the local server endpoint
- Uses built-in react state for state management

### 🤔 How to?

---

- Clone this repo to your local and do an `npm or yarn install`
- Then use either `npm or yarn start` to serve the application at `localhost` port `3000`
- If you like to simulate a local JSON server endpoint for todo CRUD operations,
  then run `json-server -w src/api/server.js -p 4000` and this will spin-up an endpoint at `http://localhost:4000`
- The endpoint exposes a `todos` resource at url --> `http://localhost:4000/todos`
- If you don't have `json-server` installed globally, you can do so by running `npm install -g json-server`

#### 🎉 💥 🥳 And that's it...You should now have a simple react/tailwind todo app up and running !!
