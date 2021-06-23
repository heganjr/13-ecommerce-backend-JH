const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
   try {
     const findAllTags = await Tag.findAll({
       include: [{ model: Product, through: ProductTag }],
     });
     res.status(200).json(findAllTags);
   } catch (err) {
     res.status(500).json(err);
   }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  try {
    const findOneID = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });

    if (!findOneID) {
      res.status(404).json({ message: "No Tag found with that id!" });
      return;
      //  I DONT WANT TO DO THE NEXT BIT!
    }
    res.status(200).json(findOneID);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  try {
    const postTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(postTag);
  } catch (err) {
    res.status(500).json(err);
  }
  
  // create a new tag
});

router.put("/:id", async (req, res) => {
  try {
    const updateTagName = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(updateTagName);

    if (!updateTagName) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
      //  I DONT WANT TO DO THE NEXT BIT!
      // Need where: parameters in an object {} (id)
    }
    res.status(200).json(updateTagName);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (!deleteTag) {
      res.status(404).json({ message: "No Tag found with that id!" });
      return;
    }
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
