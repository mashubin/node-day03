/**
 * Created by web-01 on 2017/11/14.
 */
const url = require("url");
let string ='http://bing.com:80/test1/test2?k1=v1&k2=v2#anch';
console.log(url.parse(string,true));
console.log(url.format(url.parse(string)));