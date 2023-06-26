const router = require("express").Router();
const { Category, Product } = require("../../models");

// get all categories
router.get("/", (req, res) => {
  Category.findAll({
    include: [Product],
  }).then((data) => res.json(data));
});

// find a specific category
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  }).then((data) => res.json(data));
});

// make a new category
router.post("/", (req, res) => {
  Category.create(req.body).then((newCategory) => res.json(newCategory));
});

// update a category by its `id` value
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((data) => res.status(200).json(data));
});

// delete a category by its `id` value
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((data) => res.status(200).json(data));
});

module.exports = router;
