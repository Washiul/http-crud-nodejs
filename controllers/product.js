const Product = require('../models/product');

const getProducts = async (req, res) => {
	const products = await Product.findAll();
	res.writeHead(200, {'Content-Type': 'application/json'});
	return res.end(JSON.stringify(products));
}

const getProduct = async (req, res, id) => {
	const product = await Product.findById(id);
	res.writeHead(200, {'Content-Type': 'application/json'});
	return res.end(JSON.stringify(product));
}

const createProduct = (req, res) => {

	let formData = '';
	
	req.on('data', (chunk)=>{
		formData += chunk;
	});

	req.on('end', async ()=>{
		const data = JSON.parse(formData);
		const product = await Product.create(data);
		res.writeHead(201, {'Content-Type': 'application/json'});
		return res.end(JSON.stringify(product));
	});
	
}


module.exports = {
	getProducts,
	getProduct,
	createProduct
}