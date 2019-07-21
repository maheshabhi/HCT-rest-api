module.exports = (app) => {

    const projectDetailsController = require('../controllers/project-details.controllers.js');

    app.get('/projectDetails', projectDetailsController.getProjects);
    
}