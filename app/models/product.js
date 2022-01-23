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

    //Получить топ 8 товаров
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

    //Получить обычные товары
    async getNotSpecialProducts(){
        try{
            let [rows,fields] = await this.#connection.query('SELECT p.id as id, name, p.description as description, author_id, price, second_name, image FROM product p INNER JOIN product_images pi ON p.id = pi.product_id INNER JOIN employee e ON p.author_id = e.id WHERE e.position_id != 317 GROUP BY p.id');
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Добавить продукт
    async addProduct(name,description,authorId,price,secondName,image){
        try{
            let [rows,fields] = await this.#connection.query('INSERT INTO `product` (name, description, author_id, price, second_name) VALUES (?,?,?,?,?)',[name,description,authorId,price,secondName]);
            // [...images].forEach(item=>this.addProductImage(rows.insertId, item));
            await this.addProductImage(rows.insertId, image);
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
            return rows[0];
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    //Получить остальные продукты
    async getRestProducts(productId){
        try{
            const [rows,fields] = await this.#connection.query('SELECT p.id as id, name, p.description as description, author_id, price, second_name, image, firstname,surname FROM product p INNER JOIN product_images pi ON p.id = pi.product_id INNER JOIN employee e ON p.author_id = e.id WHERE p.id != ?', [productId]);
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e)
        }finally {

        }
    }

    //Получить товары определённого автора
    async getProductsByAuthor(authorId){
        try{
            const [rows,fields] = await this.#connection.query('SELECT p.id as id, name, p.description as description, author_id, price, second_name, image, firstname,surname FROM product p INNER JOIN product_images pi ON p.id = pi.product_id INNER JOIN employee e ON p.author_id = e.id WHERE p.author_id = ?',[authorId]);
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Удалить товар
    async deleteProduct(id){
        try{
            const [rows, fields] = await this.#connection.query('DELETE FROM product WHERE id = ?',[id]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Обновить продукт
    async updateProduct(name,description,authorId,price,secondName,id,image){
        try{
            const [rows, fields] = await this.#connection.query('UPDATE product SET name = ?, description = ?, author_id = ?,price = ?, second_name = ? WHERE id=?',[name,description,authorId,price,secondName,id]);
            await this.#connection.query('UPDATE product_images SET image = ? WHERE product_id = ?', [image, id]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Добавить 3d-демо
    async addDemo(productId,model,scene,texture,path){
        try{
            const [rows,fields] = await this.#connection.query('INSERT INTO demo (product_id, model, scene, texture, path) VALUES (?,?,?,?,?)',[productId,model,scene,texture,path]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Получить 3d-demo
    async getDemo(productId){
        try{
            const [rows,fields] = await this.#connection.query('SELECT * FROM demo WHERE product_id = ?',[productId]);
            return rows[0];
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Купить продукт
    async buyProduct(userId,productId){
        try{
            const [rows,fields] = await this.#connection.query('INSERT INTO purchases (buyer_id, product_id) VALUES (?,?)',[userId,productId]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }

    //Получить все товары, купленные пользователем
    async getPurchasesByBuyer(userId){
        try{
            const [rows,fields] = await this.#connection.query('SELECT p.id as id, name, description, author_id, price, second_name, image FROM product p INNER JOIN product_images pi ON p.id = pi.product_id INNER JOIN purchases p2 on p.id = p2.product_id WHERE p2.buyer_id  = ? GROUP BY p.id', [userId]);
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }finally {

        }
    }
}