const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  const todo = { id: todos.length + 1, title };
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const deleted = todos.splice(index, 1)[0];
  res.status(200).json({ message: 'Todo deleted successfully', todo: deleted });
});

module.exports = app;