import express from 'express';
import { validate } from 'isvalid';
import { errors } from 'express-simple-errors';

export default function ()  {
  const router = express.Router();

  router.route('/')
    .get(getUser, returnResponse);

  async function getUser(req, res, next) {
    // TODO res.locals.user = await db.user(userTable)
    // .catch((err) => next(err));
    res.locals.user = {
      name: 'Alex Gaputin',
      email: 'alexgaputin[at]gmail.com',
    };
    next();
  }

  function returnResponse(req, res) {
    // TODO handle no responses here
    res.locals.baseUrl = `${req.protocol}://${req.get('host')}`;
    res.json(res.locals);
  }

  return router;
}
