const {Schema,  model} = require('../connection');

const productschema = new Schema({
    productname : String,
    companyname : String ,
    price: Number
});

module.exports =  model('product', productschema);
