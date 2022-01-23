module.exports = class User{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }

    //Получить всех пользователей
    async getAllUsers(){
        try{
            const [rows,fields] =await this.#connection.query('SELECT u.id as id, login, password,avatar,role_id,name FROM user u INNER JOIN role r ON u.role_id = r.id');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    async getAllUserNames(){
        try{
            const [rows, fields] = await this.#connection.query('SELECT login FROM user');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    async getAllUserEmails(){
        try{
            const [rows, fields] = await this.#connection.query('SELECT email FROM user');
            return rows;
        }catch(e){
            console.error('Ошибка запроса: ' + e);
        }finally{

        }
    }

    //Получить пользователя
    async getUser(id){
        try{
            const [rows,fields] = await this.#connection.query('SELECT u.id as id, login, password,avatar,role_id,name,email FROM user u INNER JOIN role r ON u.role_id = r.id WHERE u.id = ?',[id]);
            return rows[0];
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Поиск по логину
    async searchUser(login){
        try{
            const [rows,fields] = await this.#connection.query('SELECT u.id as id, login, password,avatar,role_id,name,email FROM user u INNER JOIN role r ON u.role_id = r.id WHERE login = ?',[login]);
            return rows[0];
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Добавить нового пользователя
    async insertUser(login, password, avatar, email){
        try{
            const [rows,fields] = await this.#connection.query('INSERT INTO user (login, password, avatar, email) VALUES (?,?,?,?)',[login, password, avatar, email]);
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

    //Обновить логин пользователя
    async updateUserLogin(login,id){
        try{
            const [rows,fields] = await this.#connection.query('UPDATE user SET login = ? WHERE id = ?',[login,id]);
        }catch(e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Обновить аватар
    async updateUserAvatar(avatar,id){
        try{
            const [rows, fields] = await this.#connection.query('UPDATE user SET avatar = ? WHERE id = ?',[avatar,id]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Обновить пароль
    async updateUserPassword(password,id){
        try{
            const [rows,fields] = await this.#connection.query('UPDATE user SET password = ? WHERE id=?',[password,id]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Обновить email
    async updateUserEmail(email, id){
        try{
            const [rows, fields] = await this.#connection.query('UPDATE user SET email = ? WHERE id = ?',[email,id]);
        }catch(e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    async banUser(userId, reason, ip){
        try{
            const [rows, fields] = await this.#connection.query('INSERT INTO banned (user_id, reason, ip) VALUES (?,?,?)',[userId, reason, ip]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    async unbanUser(userId){
        try{
            const [rows, fields] = await this.#connection.query('DELETE FROM banned WHERE user_id = ?',[userId]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    async getBannedIps(){
        try{
            const [rows, fields] = await this.#connection.query('SELECT ip FROM banned');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    async getBannedIds(){
        try{
            const [rows, fields] = await this.#connection.query('SELECT user_id FROM banned');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

}