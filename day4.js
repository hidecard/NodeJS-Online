const fs = require('fs');

// const readStream = fs.createReadStream('rename.txt',{
//     encoding: 'utf-8'
// })
// readStream.on('data',(chunk)=>{
//     console.log('Dta receive',chunk);
// })
// readStream.on('end',()=>{
//     console.log("finish")
// })
// readStream.on('error',(err) =>{
//     console.log("error",err);
// })


const writeString = fs.createWriteStream('output.txt');
writeString.write('Hello Stream \n');
writeString.write('write data chunk \n')
writeString.write('Hello Stream \n');
writeString.write('write data chunk \n')
writeString.write('Hello Stream \n');
writeString.write('write data chunk \n')
writeString.write('Hello Stream \n');
writeString.write('write data chunk \n')
writeString.end('finish')
writeString.on('finish',()=>{
    console.log('All Done')
})