# template-express

## step 1 - scaffolding

```bash
# clone repository
# add package-lock.json to .gitignore
# edit README.md

# create file server.js
ni server.js

# init
npm init -y

# create env file
ni .env

# add in env PORT = 3000
# configure package json with dev and start script (env e watch)
```

```json
"scripts": {
    "start": "node --env-file=.env server.js",
    "dev": "node --env-file=.env"
  }
```

```bash
  #per cors
  npm install cors
```

```javascript
  const express = require("express");
  const app = express();
  const cors = require("cors");
  const port = 3000;
  const booksRouter = require("./routers/booksRouter");
  
  //middleware per il CORS
  app.use(cors({
    origin: 'localhost: http://localhost:5173'
  }));
```