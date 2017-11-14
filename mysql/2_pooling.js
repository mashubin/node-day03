/**
 * Created by web-01 on 2017/11/14.
 */
//pool:池塘
const mysql =require('mysql');
let pool =mysql.createPool({
    connectionLimit:10,
    user:"root"
});
pool.getConnection((err,connection)=>{
    if(err) throw err;
    let uname='dingding'
    let upwd ='123456'
    let sql ="SELECT * FROM xuezi.user WHERE uname = ? AND upwd = ?";
    connection.query(sql,[uname,upwd],(err,results,fields)=>{
        if(err) throw err;
        console.log(results);
    })
    connection.release();
})