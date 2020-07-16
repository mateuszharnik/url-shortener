const rateLimit = require('express-rate-limit');
const { Router } = require('express');
const { validateAndSaveLink, createId } = require('../middlewares');
const {
  redirect, getLink, get404Page, getHomePage,
} = require('../controllers');

const router = Router();

const saveLinkLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Przekroczono limit. Spróbuj ponownie później.',
});

router.get('/', getHomePage);

router.get('/404', get404Page);

router.get('/:id', redirect);

router.post(
  '/',
  createId,
  validateAndSaveLink,
  saveLinkLimit,
  getLink,
);

module.exports = router;
