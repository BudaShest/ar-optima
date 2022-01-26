module.exports = class Comment{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }

    async addComment(authorId, productId,text){
        try{
            const [rows,fields] =await this.#connection.query('INSERT INTO `comment` (author_id, product_id, text) VALUES (?,?,?)',[authorId,productId,text]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }
    }

    async deleteComment(id){
        try{
            const [rows, fields] =await this.#connection.query('DELETE FROM comment WHERE id = ?',[id]);
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }
    }

    async getCommentsByProduct(productId){
        try{
            const [rows,fields] =await this.#connection.query('SELECT c.id as id, author_id, product_id, text, created_at, login, avatar FROM comment c INNER JOIN user u ON c.author_id = u.id WHERE product_id = ?',[productId]);
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }
    }

    async getCommentsByAuthor(authorId){
        try{
            const [rows,fields] =await this.#connection.query('SELECT c.id as id, author_id, product_id, text, created_at, login, avatar FROM comment c INNER JOIN user u ON c.author_id = u.id WHERE author_id = ?',[authorId]);
            return rows;
        }catch (e){
            console.error('Ошибка запроса: ' + e);
        }
    }
}