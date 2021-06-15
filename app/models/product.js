module.exports = class Product{
    #connection;

    constructor(connection){
        this.#connection = connection;
    }

    async getAllProducts(){
        try{
           const [rows,fields] = await this.#connection.query('SELECT * FROM product');
           return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {
            console.log();
        }
    }

    async addProduct(name,description,author,price,secondName,images){
        try{
            let [rows,fields] = await this.#connection.query('INSERT INTO `product` (name, description, author, price, second_name) VALUES (?,?,?,?,?)',[name,description,author,price,secondName]);
            images.forEach(item=>this.addProductImage(rows.insertId,item));
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally{

        }
    }

    async addProductImage(productId,image){
        try{
            await this.#connection.query('INSERT INTO product_images (product_id, image) VALUES (?,?)',[productId,image])
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }
}