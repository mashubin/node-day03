/**
 * Created by web-01 on 2017/11/14.
 */
const http= require('http')
const fs=require('fs')

let options={
    host:'img.jandan.net',
    path:'/news/2017/11/9ae43a67a85b42c457d1a38a756101b5.jpg',
    headers:{'User-Agent':'Mozilla/5.0'}
}
let data =''
let request =http.request(options,(res)=>{
    console.log(res.statusCode);
    res.setEncoding('binary')
    res.on('data',(buffer)=>{
        data += buffer;
        // console.log(buffer);
        res.on('end',()=>{
            fs.writeFile('./jian.png',data,'binary',(err)=>{
                if(err) throw err
                console.log('download');
            })
        })

    })
})
request.end()