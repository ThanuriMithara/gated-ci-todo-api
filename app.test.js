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
  });

  test('POST /todos with title returns 201', async () => {
    const res = await request(app).post('/todos').send({ title: 'Buy milk' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Buy milk');
  });
});