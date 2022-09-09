const siteRoute = require('./site');
const adminRoute = require('./admin');
const movieRoute = require('./movie');
function route(app){
    app.use('/',siteRoute);
    app.use('/admin',adminRoute);
    app.use('/movies',movieRoute);
}

module.exports = route;