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
  return db.createTable('demo',{
    id: {type:"int", primaryKey:true, autoIncrement:true},
    product_id: {
      type:"int",
      notNull: true,
      foreignKey: {
        name: 'demo_product_id_fk',
        table:'product',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    },
    model: {type:"string",length:255,notNull: true},
    scene: {type:"string",length:255, notNull:true},
    texture: {type:"string",length:255, notNull:true},
    path:{type:"string", length:255, notNull: true}
  });
};

exports.down = function(db) {
  return db.dropTable('demo');
};

exports._meta = {
  "version": 1
};
