const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      limit: 3,
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment', 'post_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ],
    });

    const posts = postData.map((post) => post.get({ plain:true }));
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err); 
  }
});

router.get('/posts', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment', 'post_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ],
    });
    const posts = postData.map((post) => post.get({ plain:true }));
    res.render("allposts", {
      posts,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err); 
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/create');
    return;
  }

  res.render('login');
});

router.get('/signUp', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }


  res.render('signUp');
});

module.exports = router;