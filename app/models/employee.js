/*Данный класс описывает сотрудника компании*/
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

    getMainEmployers(){
        return this.#connection.query('SELECT e.id AS id,firstname,surname,description,position_id,technology_stack,name,icon FROM employee e INNER JOIN position p ON e.position_id = p.id WHERE is_main = 1')
            .then(([rows,fields])=>{
                return rows;
            })
            .catch(err=>{
                console.error(err)
            })
            .finally(
                // this.#connection.close()
            )

    }

}