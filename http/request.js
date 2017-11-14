/**
 * Created by web-01 on 2017/11/14.
 */
const http=require("http")
let ip ='122.222.31.45'
let options ={
    host:"ip.taobao.com",
    path:'/service/getIpInfo.php?ip=' + ip
}
let request = http.request(options, (res) => {
    res.on('data', (result) => {
        console.log(result);
    })
});
request.end();