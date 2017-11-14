/**
 * Created by web-01 on 2017/11/14.
 */
const fs =require('fs')
fs.readdir(__dirname,(err,files)=>{
    if(err) throw err
    console.log(files);
})