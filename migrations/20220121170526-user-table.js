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
  return db.createTable('user',{
    id:{type:"int",primaryKey:true, autoIncrement:true},
    login:{type:"string", length:30, unique:true, notNull:true},
    password:{type:"string", length:255, notNull: true},
    avatar: {type:"string", length: 255, notNull:true, defaultValue:'def-avatar.png'},
    role_id:{
      type:"int",
      notNull:true,
      defaultValue: 1, //TODO дефолтная роль (юзер)
      foreignKey: {
        name: 'user_role_id_fk',
        table:'role',
        rules:{
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        mapping:'id'
      }
    },
    email: {type:"string", length: 70, unique: true, notNull:false}
  });
};

exports.down = function(db) {
  return db.dropTable('user');
};

exports._meta = {
  "version": 1
};
