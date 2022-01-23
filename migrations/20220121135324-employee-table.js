'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('employee', {
    id: {type:"int", primaryKey: true, autoIncrement:true},
    firstname: {type:"string", length: 30,notNull:true},
    surname: {type:"string", length: 30, notNull: true},
    age: {type: "int", notNull:false, length:2},
    description: {type: "text",notNull:true, defaultValue:"Наш новый сотрудник"},
    avatar: {type:"string", length: 255, defaultValue:'def-employer.png'},
    position_id: {
      type:"int",
      notNull:true,
      defaultValue: 1, //TODO просто рабочий
      foreignKey:{
        name:'employee_position_id_fk',
        table:'position',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping: 'id'
      }
    },
    technology_stack: {type:"text", notNull:true, defaultValue:"Что-то вроде умеет..."},
  });
};

exports.down = function(db) {
  return db.dropTable('employee');
};

exports._meta = {
  "version": 1
};
