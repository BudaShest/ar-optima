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
  return db.createTable('banned',{
    id:{type:"int",primaryKey:true, autoIncrement:true},
    user_id: {
      type:"int",
      notNull:true,
      unique:true,
      foreignKey: {
        name: 'banned_user_id_fk',
        table:'user',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    },
    reason: {type:"text", notNull: false},
    ip:{type:"string",length:255, unique: true}
  });
};

exports.down = function(db) {
  // return db.removeForeignKey('banned','banned_user_id_fk')
  //     .then(res=>db.dropTable('banned'));
  return db.dropTable('banned');
};

exports._meta = {
  "version": 1
};
