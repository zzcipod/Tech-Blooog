const router = require('express').Router();
const { Character, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/home', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const characterData = await Character.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const character = characterData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      character, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/adventure', withAuth, async (req, res) => {
  try {
  
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Character, 
        limit: 4,}],
  
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('adventure', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/shop', withAuth, async (req, res) => {
  res.render("shop", {
    logged_in : true
  })
})

router.get('/temple', withAuth, async (req, res) => {
  res.render("temple", {
    logged_in : true
  })
})

router.get('/fightS', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Character, 
        limit: 4,}],
  
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('fightS', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/fightM', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Character, 
        limit: 4,}],
  
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('fightM', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/fightB', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Character, 
        limit: 4,}],
  
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('fightB', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
})
// Use withAuth middleware to prevent access to route
router.get('/create', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Character, 
        limit: 4,}],
  
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('character', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/create');
    return;
  }

  res.render('login');
});



module.exports = router;