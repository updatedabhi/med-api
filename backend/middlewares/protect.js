const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  let token;

  // 1️⃣ Get token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // 2️⃣ If no token → block
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in",
    });
  }

  try {
    // 3️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4️⃣ Attach user
    req.user = decoded;

    // 5️⃣ Allow access
    console.log("code protect tak kaam kr rha hia");
    next();
  } catch (err) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid or expired token",
    });
  }
};
