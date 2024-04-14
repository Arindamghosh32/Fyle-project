
const request = require('supertest');
const express = require('express');
const app = express();


const useRoutes = require('../Routes/Useroutes.JS');


app.use(express.json());
app.use('/', useRoutes);

describe('Tax Calculation API', () => {
  test('Calculate tax for total income above 8 lakhs (age < 40)', async () => {
    const response = await request(app)
      .post('/calculate-tax')
      .send({ annual: 4000000, extra: 7000, age: 35, gross: 300000 });

    expect(response.statusCode).toBe(200);
    expect(response.body.taxAmount).toBeCloseTo(872100); 
  });


  test('Calculate tax for total income less than 6 lakhs (age < 40)', async () => {
    const response = await request(app)
      .post('/calculate-tax')
      .send({ annual: 400000, extra: 7000, age: 35, gross: 2000 });

    expect(response.statusCode).toBe(200);
    expect(response.body.taxAmount).toBeCloseTo(0); 
  });

});
