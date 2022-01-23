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
  return db.createTable('position',{
    id: {type:"int", primaryKey: true, autoIncrement:true},
    name: {type:"string", length: 50, unique:true, notNull: true},
    icon: {type: "string", length: 255,notNull:true, defaultValue:"def-position.png"},
    is_main: {type:"boolean", notNull: true, defaultValue: false}
  });

};

exports.down = function(db) {
  return db.dropTable('position');
};

exports._meta = {
  "version": 1
};
