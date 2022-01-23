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
  return db.createTable('on_work', {
    id: {type:"int",primaryKey:true, autoIncrement:true},
    customer_id: {
      type:"int",
      notNull: true,
      foreignKey: {
        name: 'on_work_customer_id_fk',
        table:'user',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping: 'id'
      }
    },
    author_id: {
      type:"int",
      notNull: true,
      foreignKey: {
        name: 'on_work_author_id_fk',
        table:'employee',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    },
    service_id: {
      type:"int",
      notNull: true,
      foreignKey: {
        name: 'on_work_service_id_fk',
        table:'service',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    },
    status_id: {
      type:"int",
      notNull: true,
      foreignKey: {
        name: 'on_work_status_id_fk',
        table:'status',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    },
    description: {
      type:"text",
      notNull:false,
    },
  });
};

exports.down = function(db) {
  return db.dropTable('on_work');
};

exports._meta = {
  "version": 1
};
