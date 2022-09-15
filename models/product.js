const products = require('../data/products');
const {writeDataToFile} = require('../utils');

const findAll = () =>{
 	return new Promise((resolve, reject)=>{
 		resolve(products);
 	})
}

const findById = (id)=>{
	return new Promise((resolve, reject)=>{
		const product = products.find((product)=>{
			return product.id == id;
		});
		resolve(product);
	})
}

const create = (data)=>{
	return new Promise((resolve, reject)=>{
		products.push(data);
		writeDataToFile('./data/products.json', products);
		resolve(data);
	})
}

module.exports = {
 	findAll,
 	findById,
 	create
}