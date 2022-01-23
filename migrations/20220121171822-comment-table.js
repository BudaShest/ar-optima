'use strict';

const DateTimeWorker = require('../app/utils/DateTimeWorker');

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
  return db.createTable('comment',{
    id:{type:"int",primaryKey:true, autoIncrement:true},
    author_id:{
      type:"int",
      notNull:true,
      foreignKey: {
        name: 'comment_author_id_fk',
        table:'user',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    },
    product_id:{
      type:"int",
      notNull: true,
      foreignKey: {
        name: 'comment_product_id_fk',
        table:'product',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    },
    text:{type:"text", notNull:true},
    created_at:{type:"datetime", defaultValue: DateTimeWorker.getCurrentDateMySql()}
  });
};

exports.down = function(db) {
  return db.dropTable('comment');
};

exports._meta = {
  "version": 1
};
