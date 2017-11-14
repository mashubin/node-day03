/**
 * Created by web-01 on 2017/11/14.
 */
const http =require('http')
let server =http.createServer()
server.on("request",(req,res)=>{
    console.log(req.url)
    console.log(req.httpVersion)
    console.log(req.headers)
    res.writeHeader(200,"OK",{"Content-Type":'text/html;charset=utf-8'})
    res.end('测试');
})
server.listen(80)