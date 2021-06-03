module.exports = class Employee{
    #connection;

    constructor(connection) {
        this.#connection = connection
    }

    getAllEmployers(){ //TODO возможно образец
        return this.#connection.query('SELECT * FROM employee')
            .then(([rows,fields])=>{
                return rows;
            })
            .catch(err=>{
                console.error(err)
            })
            .finally( //TODO нужно ли это?
                this.#connection.close()
            )
    }

}