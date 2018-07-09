const comment = require('./controller');

module.exports = function(app, express) {
    let apiRouter = express.Router();
    apiRouter.use('/comment', comment);

    return apiRouter;
};
