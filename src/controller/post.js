const prisma = require("../lib/prisma");

async function create(req, res) {
  const { title, joke } = req.body;

  if (!title || !joke) {
    return res.status(400).json({
      status: 400,
      message: "Some parameters are missing [title, joke].",
    });
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        joke,
        authorId: req.user.id,
      },
    });
    return res.status(201).json(post);
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
}

module.exports = {
  create,
};
