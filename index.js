const http = require('http');
const url = require('url');
const utils = require('./utils.js');
const { getProducts, getProduct, createProduct } = require('./controllers/product');
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res)=>{

	const q = url.parse(req.url, true);
	const route = q.pathname;

	if( route === '/api/products' && req.method === 'GET' ){
		getProducts(req, res);
	}else if( route.match(/api\/products\/[\d]+/) && req.method === 'GET'){
		const id = route.match(/[\d]+/)[0];
		getProduct(req, res, id);
	}else if( route === '/api/products' && req.method === 'POST'){
		createProduct(req, res);
	}else{
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({ error: 'No route found'}));
	}

});

server.listen( PORT, () => console.log(`Server running at port ${PORT}`) );