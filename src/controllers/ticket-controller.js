const TicketService = require('../services/email-service');

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            data: response,
            err: {},
            success: true,
            message: 'Successfully registered an Email reminder'
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            err: error,
            success: false,
            message: 'Not able to register an Email reminder'
        })
    }
}

module.exports = {
    create
}