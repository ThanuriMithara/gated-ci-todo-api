const request = require('supertest');
const app = require('./app');

describe('Todo API', () => {
  test('GET /todos returns 200 and an array', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /todos without title returns 400', async () => {
    const res = await request(app).post('/todos').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('title is required');
  });

  test('POST /todos with title returns 201', async () => {
    const res = await request(app).post('/todos').send({ title: 'Buy milk' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Buy milk');
    expect(res.body.id).toBeDefined();
  });

  test('DELETE /todos/:id deletes an existing todo', async () => {
    const created = await request(app).post('/todos').send({ title: 'Task to delete' });
    const todoId = created.body.id;

    const res = await request(app).delete(/todos/ + todoId);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Todo deleted successfully');
  });

  test('DELETE /todos/:id returns 404 for non-existent todo', async () => {
    const res = await request(app).delete('/todos/99999');
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Todo not found');
  });
});