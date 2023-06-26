const router = require("express").Router();
const { where } = require("sequelize");
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint
// find all tags
router.get("/", (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  }).then((data) => res.status(200).json(data));
});

// find a single tag by its `id`
router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
  }).then((data) => res.status(200).json(data));
});

// create a new tag
router.post("/", (req, res) => {
  Tag.create(req.body).then((data) => res.status(200).json(data));
});

// update a tag's name by its `id` value
router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((data) => res.status(200).json);
});

// delete on tag by its `id` value
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.body.id,
    },
  }).then((data) => res.status(200).json(data));
});

module.exports = router;
