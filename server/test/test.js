/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

//= =================== phones API test ====================

/**
 * Testing get all phones endpoint
 */
describe('GET /phones', () => {
  it('respond with json containing a list of all phones', (done) => {
    request(app)
      .get('/api/phones')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
