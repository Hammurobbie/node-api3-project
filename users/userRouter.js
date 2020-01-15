const express = require("express");

const db = require("./userDb");

const PostDb = require("../posts/postDb");

const router = express.Router();

router.post("/", validateUser, (req, res) => {
  // do your magic!

  db.insert(req.body)
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ error: "There was a problem creating the user." });
    });
});

router.post("/:id/posts", validateUserId, validatePost, (req, res) => {
  // do your magic!
  console.log(req.body);

  PostDb.insert({ user_id: req.params.id, text: req.body.text })
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ error: "There was a problem creating the post." });
    });
});

router.get("/", (req, res) => {
  // do your magic!
  db.get()
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ error: "There was a problem retrieving users." });
    });
});

router.get("/:id", validateUserId, (req, res) => {
  // do your magic!
  const id = req.params.id;

  db.getById(id)
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: "There was a problem retrieving the user." });
    });
});

router.get("/:id/posts", validateUserId, (req, res) => {
  // do your magic!
  const id = req.params.id;

  db.getUserPosts(id)
    .then(response => res.status(201).json(response))
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: "There was a problem retrieving the posts." });
    });
});

router.delete("/:id", validateUserId, (req, res) => {
  // do your magic!
  const id = req.params.id;

  db.remove(id)
    .then(() =>
      res.status(201).json({ message: "The user was successfully deleted." })
    )
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ error: "There was a problem deleting the user." });
    });
});

router.put("/:id", validateUserId, (req, res) => {
  // do your magic!
  const id = req.params.id;

  db.update(id, req.body)
    .then(() =>
      res.status(201).json({ message: "The user was successfully updated." })
    )
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ error: "There was a problem updating the user." });
    });
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const id = req.params.id;

  if (id) {
    req.user = id;
    next();
  } else {
    res.status(400).json({ message: "invalid user id" });
  }
}

function validateUser(req, res, next) {
  // do your magic!
  if (!req.body) {
    res.status(400).json({ message: "missing user data" });
  } else if (!req.body.name) {
    res.status(400).json({ message: "missing required name field" });
  } else {
    next();
  }
}

function validatePost(req, res, next) {
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
