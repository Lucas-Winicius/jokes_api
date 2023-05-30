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

async function view(req, res) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!post) {
      return res.send(404).json({ status: 404, message: "Post not found." });
    }

    return res.status(200).json(post);
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
}

async function update(req, res) {
  const { title, joke } = req.body;
  const postInfos = {
    ...(title && { title }),
    ...(joke && { joke }),
  };

  try {
    const postUpdated = await prisma.post.update({
      where: {
        id: req.params.id,
      },
      data: postInfos,
    });

    return res.status(200).json(postUpdated);
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
}

async function deleteMethod(req, res) {
  try {
    const { deleted: _, ...updatedPost } = await prisma.post.update({
      where: { id: req.params.id },
      data: { deleted: true },
    });

    return res.status(200).json(updatedPost);
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
}

module.exports = {
  create,
  view,
  update,
  delete: deleteMethod,
};
