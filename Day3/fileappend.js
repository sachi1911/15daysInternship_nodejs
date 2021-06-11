var fs=require('fs');
fs.appendFile('demo.txt','Hello Node Js!',function(err){
    if(err) throw err;
    console.log('File content updated!');
});