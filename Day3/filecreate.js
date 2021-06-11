var fs= require('fs');
fs.writeFile('demo.txt','Hello World!',function(err){
    if(err) throw err;
    console.log('FIle created!');
});