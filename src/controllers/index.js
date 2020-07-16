const Url = require('../models');

// eslint-disable-next-line no-unused-vars
const getHomePage = (req, res, next) => {
  res.render('index');
};

// eslint-disable-next-line no-unused-vars
const get404Page = (req, res, next) => {
  res.render('404');
};

const redirect = async (req, res, next) => {
  try {
    const url = await Url.findOne({ name: req.params.id });

    if (!url) {
      return res.redirect('404');
    }

    res.redirect(url.url);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500);
    next(new Error(error.message));
  }
};

// eslint-disable-next-line no-unused-vars
const getLink = (req, res, next) => {
  res.status(200).json(req.shortUrl);
};

module.exports = {
  redirect, getLink, getHomePage, get404Page,
};
