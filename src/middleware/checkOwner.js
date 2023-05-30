const prisma = require("../lib/prisma");

async function checkOwner(req, res, next) {
  try {
    const post = await prisma.post.findFirst({
      where: { id: req.params.id, deleted: false },
      include: { author: true },
    });

    if (!post) {
      return res
        .status(404)
        .json({ status: 404, message: "Unable to find your post." });
    }

    if (req.user.id !== post.author.id) {
      return res.status(401).json({
        status: 401,
        message: "You cannot edit as this is not yours.",
      });
    }

    return next();
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
}

module.exports = checkOwner;
