module.exports = class Product{
    #connection;

    constructor(connection){
        this.#connection = connection;
    }

    //TODO тест на промисах
    getAllProducts(){
        return this.#connection.query('SELECT * FROM product')
            .then(([rows,fields])=>{
              return rows;
            })
            .catch(err=>console.error(err))
            .finally(

            )
    }

    //TODO тест на async
    // async getAllProducts(){
    //     let [rows,fields] = await this.#connection.query('SELECT * FROM product');
    //     console.log(rows)
    // }
}