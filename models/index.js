// const Character = require('./Character');
// const Monster = require('./Monster');
const User = require('./User');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'

});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'

});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'

});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});


Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});




module.exports = {
    // Character,
    // Monster,
    User,
  };

