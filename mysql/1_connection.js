/**
 * Created by web-01 on 2017/11/14.
 */
const mysql =require('mysql');
let connection =mysql.createConnection({
    user:'root'
});
connection.connect((err)=>{
    if(err) throw err
    connection.query('SELECT 1',(err,result,fileds)=>{
        if(err) throw err
        console.log(result);
    })
})