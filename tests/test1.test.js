const request = require('supertest');
const app = require('../server');

describe('Test suite 1:', () => {
  it('test 1:', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('test 2:', async () => {
    const res = await request(app).get('/132413');
    expect(res.statusCode).toEqual(404);
  });
});
