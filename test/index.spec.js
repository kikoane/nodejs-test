import request from 'supertest';
import app from '../src/service/app';

describe('GET /players', () => {
  it('it should has status code 200', done => {
    request(app)
      .get('/players')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /players/:id', () => {
  it('it should has status code 200', done => {
    request(app)
      .get('/players/17')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /players/:id', () => {
  it('it should has status code 404', done => {
    request(app)
      .get('/players/18')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});
