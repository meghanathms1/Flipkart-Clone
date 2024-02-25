 const mongoose = require('mongoose');
 const Connection = async()=>{
    const URL ='mongodb://localhost:27017/Flipkart';
    try{
       await mongoose.connect(URL)
        console.log("connected to mongoDB");
    }
    catch(error){
        console.log("error while connecting ".error.message)
    }

}

module.exports = Connection