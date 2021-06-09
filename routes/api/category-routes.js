const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // can use async
  // find all categories
  try {
    const findAllCategory = await Category.findAll({
      include: [{ model: Product }],
      
    });
    console.log(findAllCategory)
    res.status(200).json(findAllCategory);
    
  } catch (error) {
    res.status(500).json(err);
    
  }
  // find all, include the Product model and push JSON of findAllcategory on 200 and err on 500

  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const findOneID = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

     if (!findOneID) {
       res.status(404).json({ message: "No category found with that id!" });
       return;
      //  I DONT WANT TO DO THE NEXT BIT!

    }
    res.status(200).json(findOneID);
    
  } catch (error) {
    res.status(500).json(err);

    
  }
  // anything 
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
