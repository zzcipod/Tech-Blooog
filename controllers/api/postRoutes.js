const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const post = postData.get({ plain: true });

    res.render('homepage', {
      post,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/Comment', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: Post,
          attributes: ['title', 'body', 'user_id'],
        },
      ],
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render('homepage', {
      comments,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/Comment/:id', withAuth, async (req, res) => {
  try {
    const commentData = await comment.findByPk(req.params.id);

    const comment = commentData.get({ plain: true });

    res.render('homepage', {
      comment,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  console.log(req.body);
  console.log('you made it!');
  try {
    const newPost = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/Comment', async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.body,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/:id', async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.body,
      user_id: req.session.user_id,
      post_id: req.params.id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;
