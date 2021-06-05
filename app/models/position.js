module.exports = class Position{
    #connection;

    constructor(connection) {
        this.#connection = connection;
    }

    getAllPositions(){
        return this.#connection.query('SELECT * FROM position')
            .then(([rows,fields])=>{
                return rows;
            })
            .catch(err=>console.log(err))
            .finally(

            )
    }
}