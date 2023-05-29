const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma");

async function login(req, res) {
  const { name, password } = req.body;
  if (!name || !password) {
    return res
      .status(400)
      .json({ status: 400, message: "Invalid credentials" });
  }

  try {
    const {
      deleted: _,
      password: __,
      ...user
    } = await prisma.user.findFirst({
      where: {
        name,
        password,
      },
    });

    if (!user) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }

    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res
      .status(200)
      .cookie(process.env.COOKIE_NAME, token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
        secure: false,
        httpOnly: true,
        sameSite: "strict",
      })
      .json(user);
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
}

module.exports = {
  login,
};
