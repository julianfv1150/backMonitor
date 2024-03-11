const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Manage TODO',
      version: '1.0.0',
      description:
      'This is an TODO for manage yours activities'
    }
  },
  apis: ['./src/routes/routes.js']
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/doc.json', (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`Docs are available on http://localhost:${port}/docs`);
};

module.exports = { swaggerDocs };
