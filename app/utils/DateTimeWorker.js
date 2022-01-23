/**
 * Класс для работы с датой и временем
 */
class DateTimeWorker{

    /**
     * Метод для получения текущей даты и времени в формате sql
     * @returns {string}
     */
    static getCurrentDateMySql(){
        return new Date().toISOString().slice(0,19).replace('T',' ');
    }
}

module.exports = DateTimeWorker;