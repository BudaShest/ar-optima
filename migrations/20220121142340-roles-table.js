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
  return db.createTable('role',{
    id:{type:"int",primaryKey:true, autoIncrement:true},
    name:{type:"string",length:30,notNull:true,unique:true},
  });
};

exports.down = function(db) {
  return db.dropTable('role');
};

exports._meta = {
  "version": 1
};
