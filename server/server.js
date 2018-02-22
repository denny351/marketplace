const express = require('express')
const server = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const config = require('./config/config').get(process.env.NODE_ENV);

const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
const nextApp = next({ dev })

const port = parseInt(process.env.PORT, 10) || 3000
const handle = nextApp.getRequestHandler();

const authRoutes = require('./routes/api/auth');
const itemRoutes = require('./routes/api/item');
const userRoutes = require('./routes/api/user');

nextApp.prepare().then(() => {
	server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(cookieParser());

	// MongoDB
	mongoose.Promise = Promise;
	mongoose.connect(config.DATABASE);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));

	// server.get('/item', (req, res) => {
	//   return app.render(req, res, '/item', req.query);
	// });

	server.use('/api', authRoutes);
	// server.use('/api/user', userRoutes);
	// server.use('/api/item', itemRoutes);

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
