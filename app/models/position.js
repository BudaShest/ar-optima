module.exports = class Position{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }



    async getAllPositions(){
        try{
            const [rows,fields] = await this.#connection.query('SELECT * FROM position');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {
            // console.log()
        }
    }

    async addPosition(name,icon,isMain){
        try{
            await this.#connection.query("INSERT INTO `position` (name, icon, is_main) VALUES (?,?,?)",[name, icon, isMain]);
        }catch(e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    async deletePosition(id){
        try{
            const [rows,fields] = await this.#connection.query('DELETE FROM position WHERE id = ?',[id]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }

    }
}