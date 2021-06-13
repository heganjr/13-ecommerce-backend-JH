const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // can use async
  // find all categories
  try {
    const findAllCategory = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(findAllCategory);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all, include the Product model and push JSON of findAllcategory on 200 and err on 500

  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
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
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products - DONE
});

router.post("/", async (req, res) => {
  try {
    const postCategory = await Category.create({
      category_name: req.body.category_name,
    });
    console.log(res.params);
    res.status(200).json(postCategory);
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new category
  // Dont need if as not selecting from ID
  // creates a category - Done
});

router.put("/:id", async (req, res) => {
  try {
    const updateCategoryName = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(updateCategoryName);

    if (!updateCategoryName) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
      //  I DONT WANT TO DO THE NEXT BIT!
      // Need where: parameters in an object {} (id)
    }
    res.status(200).json(updateCategoryName);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a category by its `id` value
  // why is the 404 message not working for the put request when an ID that doesnt exist is requested?

});

router.delete("/:id", async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: { id: req.params.id },
    });

    if (!deleteCategory) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
      
    }
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
