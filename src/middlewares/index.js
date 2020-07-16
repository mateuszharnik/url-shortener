const { nanoid } = require('nanoid');
const urlSchema = require('../schemas');
const Url = require('../models');

const createId = (req, res, next) => {
  if (req.body && !req.body.name) {
    req.body.name = nanoid();
  }

  next();
};

const validateAndSaveLink = async (req, res, next) => {
  try {
    const { url, name } = await urlSchema.validate(req.body);

    const shortUrl = await Url.findOne({ name });

    if (shortUrl) {
      res.status(409);
      return next(new Error('Wybrana nazwa jest już zajęta.'));
    }

    req.shortUrl = await new Url({ url, name }).save();

    next();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(409);
    next(new Error(error.message));
  }
};

module.exports = {
  createId,
  validateAndSaveLink,
};
