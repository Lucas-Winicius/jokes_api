const prisma = require("../lib/prisma");

async function home(req, res) {
  const pageNumber = req.query?.page || 1;
  try {
    const posts = await prisma.post.findMany({
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
      where: {
        deleted: false,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (pageNumber - 1) * 30,
      take: 30,
    });
    return res.status(200).json(posts);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ status: 500, message: "Internal error." });
  }
}

module.exports = home;
