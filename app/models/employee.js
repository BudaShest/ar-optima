/*Данный класс описывает сотрудника компании*/
module.exports = class Employee{
    #connection;

    constructor(connection) {
        this.#connection = connection
    }


    async getAllEmployers(){
        try{
            const [rows,fields] = await this.#connection.query('SELECT e.id AS id,firstname,surname,description,avatar,position_id,technology_stack,name,icon FROM employee e INNER JOIN position p ON e.position_id = p.id');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {
            //Результат запроса + закрывать подключение к бд
            console.log();
        }
    }

    async getMainEmployers(){
        try {
            const [rows,fields] = await this.#connection.query('SELECT e.id AS id,firstname,surname,description,avatar,position_id,technology_stack,name,icon FROM employee e INNER JOIN position p ON e.position_id = p.id WHERE is_main = 1 ORDER BY e.id LIMIT 3');
            return rows;
        }catch (e){
            console.error('Ошбика запроса: ' + e);
        }finally {

        }
    }

    async getRestEmployers(){
        try{
            const [rows,fields] = await this.#connection.query('SELECT e.id AS id,firstname,surname,description,avatar,position_id,technology_stack,name,icon FROM employee e INNER JOIN position p ON e.position_id = p.id WHERE is_main = 0 ORDER BY e.id');
            return rows;
        }catch (e){
            console.error('Ошбика запроса: ' + e);
        }finally {

        }
    }

    async addEmployer(firstName,surname,age,positionId,avatar,description,stack){
        try{
            await this.#connection.query('INSERT INTO employee (firstname, surname, age, description, avatar, position_id, technology_stack) VALUES (?,?,?,?,?,?,?)',[firstName,surname,age,description,avatar,positionId,stack]);
        }catch (e){
            console.error('Ошибка запроса:' + e)
        }finally {

        }
    }

    async getEmployer(id){
        try{
            const [rows,fields] = await this.#connection.query('SELECT e.id AS id,firstname,surname,description,avatar,position_id,technology_stack,name,icon FROM employee e INNER JOIN position p ON e.position_id = p.id WHERE e.id = ?',[id]);
            return rows;
        }catch (e){

        }finally {

        }

    }

}