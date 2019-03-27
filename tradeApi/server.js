const PORT = 4000;

// ---> start the server on port 3000 
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser')
    swaggerJSDoc = require('swagger-jsdoc'),
    path = require('path'),
    cors = require('cors');

// swagger definition
const swaggerDefinition = {
    info: {
      title: 'Trade Swagger API',
      version: '1.0.0',
      description: 'Trade API Specifications',
    },
    host: `localhost:${PORT}`,
    basePath: '/',
  };
  
// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./api/routes/*.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

// <-------------END swaggerSpec

// ---- > Enable CORS on Express


app.use(cors());
// <-------------END Enable CORS on Express

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/trade');
routes(app);


// allows access to /public folder (Swagger spec UI)
app.use(express.static(path.resolve('./public')));

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

// ---- > error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });



app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});