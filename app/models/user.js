module.exports = class User{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }

    async getAllUsers(){
        try{
            const [rows,fields] =await this.#connection.query('SELECT u.id as id, login, password,avatar,role_id,name FROM user u INNER JOIN roles r ON u.role_id = r.id');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    async getUser(){

    }

    async searchUser(){

    }

    async insertUser(){

    }

    async deleteUser(){

    }

    async updateUser(){

    }

}