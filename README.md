# 🧠 Node.js Practice Workbook

Welcome to your **Node.js Practice Workbook** — a complete, hands-on guide to help you **learn and practice essential Node.js skills** through real coding exercises.

Each exercise is meant to be done in a separate `.js` file so you can focus on one concept at a time.

---

## 📁 Folder Structure

```
nodejs-workbook/
│
├── 01-hello-world.js
├── 02-read-file.js
├── 03-write-file.js
├── 04-custom-module/
│   ├── math.js
│   └── app.js
├── 05-uuid-demo.js
├── 06-callback.js
├── 07-promises.js
├── 08-async-await.js
├── 09-express-server.js
├── 10-express-routes.js
├── 11-query-and-params.js
├── 12-todo-api.js
└── package.json
```

---

## ⚙️ Setup

1. Install [Node.js](https://nodejs.org/)
2. Initialize your project:

   ```bash
   mkdir nodejs-workbook
   cd nodejs-workbook
   npm init -y
   ```
3. Install dependencies (for later exercises):

   ```bash
   npm install express uuid
   ```

---

## 🧩 Exercises

### 1️⃣ Hello World Server

**File:** `01-hello-world.js`

Create a simple HTTP server using Node’s `http` module:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

✅ **Goal:** Understand Node’s built-in HTTP module.

---

### 2️⃣ Reading a File

**File:** `02-read-file.js`

```js
const fs = require('fs');

fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});
```

✅ **Goal:** Learn asynchronous file reading.

---

### 3️⃣ Writing to a File

**File:** `03-write-file.js`

```js
const fs = require('fs');

fs.appendFile('message.txt', '\nNew content added!', (err) => {
  if (err) throw err;
  console.log('Text appended successfully.');
});
```

✅ **Goal:** Practice writing and appending to files.

---

### 4️⃣ Custom Module

**Folder:** `04-custom-module/`

**math.js**

```js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;
```

**app.js**

```js
const math = require('./math');

console.log(math.add(5, 3));
console.log(math.multiply(4, 2));
```

✅ **Goal:** Learn to export and import custom modules.

---

### 5️⃣ Using npm Package

**File:** `05-uuid-demo.js`

```js
const { v4: uuidv4 } = require('uuid');

console.log('Generated UUID:', uuidv4());
```

✅ **Goal:** Understand `npm` and third-party packages.

---

### 6️⃣ Callbacks

**File:** `06-callback.js`

```js
const fs = require('fs');

function readFileWithCallback(file, callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return callback(err);
    callback(null, data);
  });
}

readFileWithCallback('message.txt', (err, data) => {
  if (err) return console.error(err);
  console.log('File content:', data);
});
```

✅ **Goal:** Practice callback-based async handling.

---

### 7️⃣ Promises

**File:** `07-promises.js`

```js
const fs = require('fs').promises;

fs.readFile('message.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

✅ **Goal:** Learn Promise-based async code.

---

### 8️⃣ Async/Await

**File:** `08-async-await.js`

```js
const fs = require('fs').promises;

async function showFile() {
  try {
    const data = await fs.readFile('message.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

showFile();
```

✅ **Goal:** Use async/await for clean asynchronous code.

---

### 9️⃣ Express Server

**File:** `09-express-server.js`

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Welcome to my Express server!'));

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
```

✅ **Goal:** Learn Express basics.

---

### 🔟 Express Routes

**File:** `10-express-routes.js`

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Home Page'));
app.get('/about', (req, res) => res.send('About Page'));
app.get('/users', (req, res) => res.json([{ name: 'Alice' }, { name: 'Bob' }]));

app.listen(3000, () => console.log('Listening on port 3000...'));
```

✅ **Goal:** Handle multiple routes.

---

### 11️⃣ Query Params & Route Params

**File:** `11-query-and-params.js`

```js
const express = require('express');
const app = express();

app.get('/greet/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

app.get('/search', (req, res) => {
  const q = req.query.q;
  res.send(`You searched for: ${q}`);
});

app.listen(3000, () => console.log('Ready on port 3000!'));
```

✅ **Goal:** Learn how to use route and query parameters.

---

### 12️⃣ Mini Todo API

**File:** `12-todo-api.js`

```js
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
  const newTodo = { id: uuidv4(), text: req.body.text };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(todo => todo.id !== req.params.id);
  res.json({ message: 'Todo deleted' });
});

app.listen(3000, () => console.log('Todo API running on port 3000'));
```

✅ **Goal:** Build a RESTful API with in-memory storage.

---

## 🧠 Next Steps (Once You Finish)

After these basics, try these:

* Use **Express Router** for modular routes
* Connect your app to a database (e.g., **SQLite**, **MongoDB**, or **PostgreSQL**)
* Add **dotenv** for environment variables
* Learn **middleware**, **error handling**, and **authentication**