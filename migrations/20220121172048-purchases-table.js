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
  return db.createTable('purchases',{
    buyer_id: {
      type:"int",
      foreignKey: {
        name: 'purchases_buyer_id_fk',
        table:'user',
        notNull:true,
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    },
    product_id: {
      type:"int",
      notNull: true,
      foreignKey: {
        name: 'purchases_product_id_fk',
        table:'product',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    }
  });
};

exports.down = function(db) {
  return db.dropTable('purchases');
};

exports._meta = {
  "version": 1
};
