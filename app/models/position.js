module.exports = class Position{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }


    //Получить все вакансии
    async getAllPositions(){
        try{
            const [rows,fields] = await this.#connection.query('SELECT * FROM position');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }
    }

    //Добавить вакансию
    async addPosition(name,icon,isMain){
        try{
            await this.#connection.query("INSERT INTO `position` (name, icon, is_main) VALUES (?,?,?)",[name, icon, isMain]);
        }catch(e){
            console.error('Ошибка запроса: ' + e);
        }
    }

    //Удалить вакансию
    async deletePosition(id){
        try{
            const [rows,fields] = await this.#connection.query('DELETE FROM position WHERE id = ?',[id]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }
    }

    //Получить вакансию
    async getPosition(id){
        try{
            const [rows,fields] = await this.#connection.query('SELECT * FROM position WHERE id=?',[id]);
            return rows[0];
        }catch (e){
            console.error('Ошибка запроса:' + e)
        }
    }

    //Обновить вакансию
    async updatePosition(name,icon,is_main,id){
        try{
            const [rows,fields] = await this.#connection.query('UPDATE position SET name = ?,icon = ?,is_main = ? WHERE id=?',[name,icon,is_main,id]);
        }catch (e){
            console.error('Ошибка запроса:' + e)
        }
    }
}