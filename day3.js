// //function and function expression

// function func(val){
//     // console.log("This is function");
//     val();

// }

// // func();

// var fun = function(){
//     console.log("This is function expression");
// }


// func(fun);

// // fun();


const fs  = require('fs');

// try{
//     const data = fs.readFileSync('hello.txt' , 'utf8');
//     console.log(data);
// }catch(err){
//     console.log('Error read file '.err);
// }

// try{
//     fs.writeFileSync('hello.txt','Hello Write file');
//     console.log("Write file success");
// }catch(err){
//     console.log('Error write file '.err);
// }

// try{
//     fs.mkdirSync('Hello');
//     console.log("Create folder success");
// }catch(err){
//     console.log('Error create folder '.err);
// }

// try{
//     fs.unlinkSync('hello.txt');
//     console.log("Delete file success");
// }catch(err){
//     console.log('Error delete file '.err);
// }


// fs.rename('name.txt','rename.txt' , (err) => {
//     if(err){
//         console.log('Error rename file '.err);
//         return;
//     }
//     console.log("Rename file success");
// })