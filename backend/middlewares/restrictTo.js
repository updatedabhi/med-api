exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    console.log("role: ", req.user.role);
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "fail",
        message: "You are not allowed to perform this action.",
      });
    }
    next();
  };
};
