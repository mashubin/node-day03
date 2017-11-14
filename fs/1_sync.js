/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');
// let data = fs.readFileSync(__filename);
// console.log(data.toString());
fs.readFile(__filename, (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});

console.log('end.');