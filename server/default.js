
const products = require(`./contants/data.js`)
const product  =require('./model/product-schema.js')
const DefaultData = async ()=>{
 try{
    
    await product.insertMany(products)
    console.log("default data inserted");
 }catch(error){
   console.log("error while inserting default data",error.message);
 }
}
module.exports = DefaultData