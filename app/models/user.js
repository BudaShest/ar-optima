module.exports = class User{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }

    getAllUsers(){
        return this.#connection.query('SELECT u.id as id, login, password,avatar,role_id,name FROM user u INNER JOIN roles r ON u.role_id = r.id')
            .then(([rows,fields])=>{
                return rows;
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(

            )
    }

    getUser(){

    }

    searchUser(){

    }

    insertUser(){

    }

    deleteUser(){

    }

    updateUser(){

    }

}