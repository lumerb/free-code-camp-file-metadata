const Control = require('./controllers.js');

module.exports = (app) => {

    app.post('/api/upload', Control.upload);

}