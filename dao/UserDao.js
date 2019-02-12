let mysql = require('mysql')


module.exports = {
    findUserById : function findUserById(id, cal){
            let con = this.connection()
            console.log("Connected...." + con)
            this.execute(con, id, cal)
    },

    connection: ()=>{
        return mysql.createConnection({
                    host:'172.17.0.2',
                    port:'3306',
                    user:'root',
                    password:'root',
                    database:'test'
                })
    
    },
    execute: (con, id, cal)=>{
        con.connect(e=>{
            con.query('SELECT * FROM user WHERE id = ' + id, (e, result) =>{
                if(e) throw e
                console.log(result)
                if(result != null){
                    cal(result)
                }else{
                    cal('Not found')
                }
            })
        })
    }
}