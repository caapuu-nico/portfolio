const mongoose = require("mongoose");


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/portfolio");
    console.log("----> connect in the Db");
}

module.exports ={
    main
}
