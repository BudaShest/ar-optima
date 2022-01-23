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
  return db.createTable('service',{
    id: {type:"int",primaryKey: true, autoIncrement:true},
    header: {type:"string",length:128, unique:true, notNull:true},
    description: {type:"text",notNull: true, defaultValue:'Просто сервис...'},
    image: {type:"string", length: 255,notNull:true, defaultValue:"def-service.jpg"},
    price: {type: "int", notNull:true, length:6},
  });
};

exports.down = function(db) {
  return db.dropTable('service');
};

exports._meta = {
  "version": 1
};
