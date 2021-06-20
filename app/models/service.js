module.exports = class Service{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }

    async getAllServices(){
        try{
            const [rows,fields] = await this.#connection.query('SELECT * FROM service');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally{

        }
    }

    async addService(header, description,image,price){
        try{
            const [rows,fields] = await this.#connection.query('INSERT INTO service (header, description, image, price) VALUES (?,?,?,?)',[header,description,image,price]);
        }catch (e) {
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    async getService(id){
        try{
            const [rows,fields] = await this.#connection.query('SELECT * FROM service WHERE id = ?',[id]);
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }
}


