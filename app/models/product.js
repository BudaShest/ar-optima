module.exports = class Product{
    #connection;

    constructor(connection){
        this.#connection = connection;
    }

    getAllProducts(){
        return this.#connection.query('SELECT * FROM product')
            .then(([rows,fields])=>{
              return rows;
            })
            .catch(err=>console.error(err))
            .finally(

            )
    }
}