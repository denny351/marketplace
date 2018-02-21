const express = require('express')
const server = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const config = require('./config/config').get(process.env.NODE_ENV);

const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
const app = next({ dev })

const port = parseInt(process.env.PORT, 10) || 3000
const handle = app.getRequestHandler()

const itemRoute = require('./routes/api/item');
const indexRoute = require('./routes/api/index');

app.prepare().then(() => {
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  // MongoDB
  mongoose.Promise = Promise;
  mongoose.connect(config.DATABASE)
  
  server.use('/api/item', itemRoute);

    server.get('*', (req, res) => {
			return handle(req, res);
		});

  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })

  // server.get('/b', (req, res) => {
  //   return app.render(req, res, '/a', req.query)
  // })

  // server.get('/posts/:id', (req, res) => {
  //   return app.render(req, res, '/posts', { id: req.params.id })
  // })

  // server.get('*', (req, res) => {
  //   return handle(req, res)
  // })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
