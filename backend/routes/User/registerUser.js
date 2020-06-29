import User from '../../config/db.config';
import passport from 'passport';

module.exports = app => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        req.logIn(user, err => {
          console.log(user);
          const data = {
            phone: req.body.phone,
            username: user.username,
          };
          console.log(data)
          User.findOne({
            where: {
              username: data.username,
            },
          }).then(user => {
            user
              .update({
                phone: data.phone,
              })
              .then(() => {
                console.log('user created in db');
                res.status(200).send({ message: 'user created' });
              });
          });
        });
      }
    })(req, res, next);
  });
};