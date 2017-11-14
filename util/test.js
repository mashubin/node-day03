/**
 * Created by web-01 on 2017/11/14.
 */
const util =require('util');
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isDate(new Date(213333)));
console.log(util.isRegExp(new RegExp()));
console.log(util.isRegExp(/a/));