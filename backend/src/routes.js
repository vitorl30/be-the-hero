const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileIncidentesControllesr = require('./controllers/ProfileIncidentesControllesr');
const SessionController = require('./controllers/SessionController')

routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile/:id', ProfileIncidentesControllesr.index);

module.exports = routes; 