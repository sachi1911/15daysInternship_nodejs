function greet(name,callback){
    console.log('HI'+' '+name);
    callback();
}
function callMe(){
    console.log('I am call back function');
}
greet('Sachi',callMe);
