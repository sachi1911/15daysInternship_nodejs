var fs =require('fs');
const { clearScreenDown } = require('readline');
fs.open('demo.js','w',function(err,file){
    if(err) throw err;
    console.log("File open in write mode!");
});