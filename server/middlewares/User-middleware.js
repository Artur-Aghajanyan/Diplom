const {Users} = require('../models')

const checkEmail = (req, res, next) => {
    Users.findOne({
        where: {
            email: req.body.user.email
        }
    })
        .then((user) => {
            if(user === null)
                return next();
            else
                return res.status(400).json({user, status: 'There is email like that'});
        })
        .catch(() => next());
}

module.exports = {checkEmail}