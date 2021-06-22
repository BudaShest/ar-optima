module.exports = class User{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }

    //Получить всех пользователей
    async getAllUsers(){
        try{
            const [rows,fields] =await this.#connection.query('SELECT u.id as id, login, password,avatar,role_id,name FROM user u INNER JOIN roles r ON u.role_id = r.id');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    //Получить пользователя
    async getUser(id){
        try{
            const [rows,fields] = await this.#connection.query('SELECT u.id as id, login, password,avatar,role_id,name FROM user u INNER JOIN roles r ON u.role_id = r.id WHERE u.id = ?',[id]);
            return rows[0];
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Поиск по логину
    async searchUser(login){
        try{
            const [rows,fields] = await this.#connection.query('SELECT u.id as id, login, password,avatar,role_id,name FROM user u INNER JOIN roles r ON u.role_id = r.id WHERE login = ?',[login]);
            return rows[0];
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Добавить нового пользователя
    async insertUser(login, password, avatar){
        try{
            const [rows,fields] = await this.#connection.query('INSERT INTO user (login, password, avatar) VALUES (?,?,?)',[login, password, avatar]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Удалить пользователя
    async deleteUser(id){
        try{
            const [rows,fields] = await this.#connection.query('DELETE FROM user WHERE id = ?',[id]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }



}