
const express = require('express');
const router = express.Router();

// Load Recipe model
const Recipe = require('../../models/Recipe');

// @route GET api/recipe/test
// @description tests recipe route
// @access Public
router.get('/test', (req, res) => res.send('recipe route testing!'));

// @route GET api/recipe
// @description Get all recipe
// @access Public
router.get('/', (req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => 
      res.status(404).json({ norecipefound: 'meal not found'}));
});

// @route GET api/recipe/:id
// @description Get single recipe by id
// @access Public
router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(404).json({ noRecipefound: 'No recipe found' }));
});

// @route GET api/recipe
// @description add/save recipe
// @access Public
router.post('/', (req, res) => {
  Recipe.create(req.body)
    .then(recipe => res.json({ msg: 'recipe added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this recipe' }));
});

// @route GET api/recipe/:id
// @description Update recipe
// @access Public
router.put('/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(recipe => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/recipe/:id
// @description Delete recipe by id
// @access Public
router.delete('/:id', (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, req.body)
    .then(recipe => res.json({ mgs: 'recipe entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a recipe' }));
});

module.exports = router;