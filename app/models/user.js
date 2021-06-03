module.exports = class User{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }



    getAllUsers(){
        this.#connection.query('SELECT * FROM user')
            .then(res=>{

            })
        
    }

    insertUser(){

    }

}