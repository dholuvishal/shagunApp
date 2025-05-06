const { errorResponse } = require("../Utils/responseMsg.js");

const reqBodyValidator = (validationSchema) => (req, res, next) => {
  const validationResult = validationSchema.validate(req.body, {
    convert: false,
    errors: { wrap: { label: "" } },
    stripUnknown: true,
  });
  if (validationResult.error) {
    errMessage = validationResult.error.details[0].message;
    return res.status(400).json(errorResponse(400, errMessage));
  } else {
    next();
  }
};

const reqQueryValidator = (validationSchema) => (req, res, next) => {
  const validationResult = validationSchema.validate(req.query, {
    convert: false,
    errors: { wrap: { label: "" } },
    stripUnknown: true,
  });
  if (validationResult.error) {
    errMessage = validationResult.error.details[0].message;
    return res.status(400).json(errorResponse(400, errMessage));
  } else {
    next();
  }
};

const reqParamsValidator = (validationSchema) => (req, res, next) => {
  const validationResult = validationSchema.validate(req.params, {
    convert: false,
    errors: { wrap: { label: "" } },
    stripUnknown: true,
  });
  if (validationResult.error) {
    errMessage = validationResult.error.details[0].message;
    return res.status(400).json(errorResponse(400, errMessage));
  } else {
    next();
  }
};

module.exports = { reqBodyValidator, reqQueryValidator, reqParamsValidator };
