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
  return db.createTable('product',{
    id:{type:"int",primaryKey:true, autoIncrement:true},
    name: {type:"string", length: 30, notNull:true, unique:true},
    description: {type:"text", notNull: true, defaultValue:'Продукт комапнии AR-OPTIMA'},
    author_id: {
      type:"int",
      foreignKey: {
        name: 'product_author_id_fk',
        table:'employee',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    },
    price: {type:"int", notNull:true},
    second_name: {type:"string", length: 50, notNull:false}
  });
};

exports.down = function(db) {
  // return db.removeForeignKey('product','product_author_id_fk')
  //     .then(res=>db.dropTable('product'));
  return db.dropTable('product');
};

exports._meta = {
  "version": 1
};
