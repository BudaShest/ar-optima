module.exports = class Product{
    #connection;

    constructor(connection){
        this.#connection = connection;
    }

    //Получить все товары
    async getAllProducts(){
        try{
           const [rows,fields] = await this.#connection.query('SELECT p.id as id, name, description, author_id, price, second_name, image FROM product p INNER JOIN product_images pi ON p.id = pi.product_id GROUP BY p.id');
           return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {
            console.log();
        }
    }

    //Получить топ 20 товаров
    async getTopProducts(){
        try{
            const [rows,fields] = await this.#connection.query('SELECT p.id as id, name, description, author_id, price, second_name, image FROM product p INNER JOIN product_images pi ON p.id = pi.product_id GROUP BY p.id LIMIT 8');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Получить продукты от приглашённых художников
    async getSpecialProducts(){
        try{
            let [rows,fields] = await this.#connection.query('SELECT p.id as id, name, p.description as description, author_id, price, second_name, image FROM product p INNER JOIN product_images pi ON p.id = pi.product_id INNER JOIN employee e ON p.author_id = e.id WHERE e.position_id = 317 GROUP BY p.id');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Получить остальные товары
    async getRestProducts(){
        try{
            let [rows,fields] = await this.#connection.query('SELECT p.id as id, name, p.description as description, author_id, price, second_name, image FROM product p INNER JOIN product_images pi ON p.id = pi.product_id INNER JOIN employee e ON p.author_id = e.id WHERE e.position_id != 317 GROUP BY p.id');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Добавить продукт
    async addProduct(name,description,authorId,price,secondName,images){
        try{
            let [rows,fields] = await this.#connection.query('INSERT INTO `product` (name, description, author_id, price, second_name) VALUES (?,?,?,?,?)',[name,description,authorId,price,secondName]);
            images.forEach(item=>this.addProductImage(rows.insertId,item));
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally{

        }
    }

    //Добавить изображение продукта
    async addProductImage(productId,image){
        try{
            await this.#connection.query('INSERT INTO product_images (product_id, image) VALUES (?,?)',[productId,image])
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    //Получить продукт
    async getProduct(productId){
        try{
            const [rows,fields] = await this.#connection.query('SELECT p.id as id, name, p.description as description, author_id, price, second_name, image, firstname,surname FROM product p INNER JOIN product_images pi ON p.id = pi.product_id INNER JOIN employee e ON p.author_id = e.id WHERE p.id = ?', [productId]);
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }
}