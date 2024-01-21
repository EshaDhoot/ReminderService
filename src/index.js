const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
// const { createChannel } = require('./utils/messageQueue');
// const { sendBasicEmail } = require('./services/email-service');
const jobs = require('./utils/job');

const TicketController = require('./controllers/ticket-controller');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    

    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log('Server started at Port:',PORT);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'eshadhoot20@gmail.com',
        //     'This is a testing email',
        //     'Hey How are you'
        // );
    });

}

setupAndStartServer();