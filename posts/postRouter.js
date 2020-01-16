const express = require("express");

const db = require("./postDb");

const router = express.Router();

router.get("/", (req, res) => {
  // do your magic!
  db.get()
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ error: "There was a problem retrieving posts." });
    });
});

router.get("/:id", (req, res) => {
  // do your magic!
  const id = req.params.id;

  db.getById(id)
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: "There was a problem retrieving the post." });
    });
});

router.delete("/:id", (req, res) => {
  // do your magic!
  const id = req.params.id;

  db.remove(id)
    .then(() =>
      res.status(201).json({ message: "The post was successfully deleted." })
    )
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ error: "There was a problem deleting the post." });
    });
});

router.put("/:id", validatePostId, (req, res) => {
  // do your magic!
  const id = req.params.id;

  db.update(id, req.body)
    .then(post => res.status(201).json(post))
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ error: "There was a problem updating the post." });
    });
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  if (!req.body) {
    res.status(400).json({ message: "missing post data" });
  } else if (!req.body.text) {
    res.status(400).json({ message: "missing required text field" });
  } else {
    next();
  }
}

module.exports = router;
