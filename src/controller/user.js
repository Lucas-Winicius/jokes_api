function create(req, res) {
  res.send(`Creating ${req.body.name}!`);
}

module.exports = {
  create,
};
