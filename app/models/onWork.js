module.exports = class OnWork{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }

    //Добавить новую задачу
    async insertWork(customerId,authorId,serviceId,description){
        try{
            const [rows,fields] = await this.#connection.query('INSERT INTO on_work (customer_id, author_id, service_id, status_id, description) VALUES (?,?,?,1,?)',[customerId,authorId,serviceId,description]);
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    //Обновить задачу
    async updateWork(authorId,statusId,id){
        try{
            const [rows,fields] = await this.#connection.query('UPDATE on_work SET author_id = ?, status_id = ? WHERE id = ?',[authorId, statusId,id]);
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    //Удалить задачу
    async deleteWork(){
        try{

        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    //Получить все задачи
    async getAllWorks(){
        try{
            const [rows,fields] = await this.#connection.query('SELECT o.id as id,image,header,firstname,surname,price FROM on_work o INNER JOIN service s ON o.service_id = s.id INNER JOIN user u ON o.customer_id = u.id LEFT JOIN employee e ON o.author_id = e.id INNER JOIN status s2 on o.status_id = s2.id');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    //Получить отдельную задачу
    async getWork(id){
        try{
            const [rows,fields] = await this.#connection.query('SELECT o.id as id,customer_id,author_id,service_id,status_id,firstname,surname,e.avatar as employer_avatar,u.avatar as user_avatar,login,header,price,image,name,o.description as description FROM on_work o INNER JOIN service s ON o.service_id = s.id INNER JOIN user u ON o.customer_id = u.id LEFT JOIN employee e ON o.author_id = e.id INNER JOIN status s2 ON o.status_id = s2.id WHERE o.id = ?',[id]);
            return rows[0];
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    //Получить все статусы
    async getAllStatuses(){
        try{
            const [rows,fields] = await this.#connection.query('SELECT * FROM status');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }
}