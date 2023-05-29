const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma");

async function create(req, res) {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({
      status: 400,
      message:
        "Please fill in all fields correctly, including name and password.",
    });
  }

  if (password.length < 8 || password.length > 255) {
    return res.status(400).json({
      status: 400,
      message: "The password must be between 8 and 255 characters.",
    });
  }

  try {
    const user = await prisma.user.create({ data: { name, password } });
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "7d" });

    return res
      .status(201)
      .cookie(process.env.COOKIE_NAME, token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
        secure: false,
        httpOnly: true,
        sameSite: "strict",
      })
      .json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message:
        "There was an internal error. Please try again or try using a different nickname.",
    });
  }
}

async function view(req, res) {
  try {
    const { password: _, ...user } = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      include: {
        posts: true,
      },
    });
    res.json(user);
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  create,
  view,
};
