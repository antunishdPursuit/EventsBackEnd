const checkName = (req, res, next) => {
  if (req.body.username) {
    next()
  } else {
    res.status(400).json({ error: "Username is required" });
  }
};
  
const checkBoolean = (req, res, next) => {
  const { looking_for_group } = req.body;
  
  if (
    looking_for_group == "true" ||
    looking_for_group == "false" ||
    looking_for_group == undefined ||
    looking_for_group === true ||
    looking_for_group === false
  ) {
    next();
  } else {
    res.status(400).json({ error: "looking_for_group must be a boolean value" });
  }
};

const validatePhoto = (req, res, next) => {
  const test = req.body.profile_picture.split(".")
  const test1 = test[test.length - 1]

  if (
    test1 === "jpg" ||
    test1 === "jpeg" ||
    test1 === "png" 
  ) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: `Supported file types are .jpg, .jpeg, or .png Test: ${test1}` });
  }
};

module.exports = { checkBoolean, checkName, validatePhoto };