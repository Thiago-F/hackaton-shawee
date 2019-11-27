const mongoose = require('mongoose');
const Escola = mongoose.model('Escola');
module.exports = {

    async index (req, res) {
        const {page = 1} = req.query;
        const escola = await Escola.paginate({}, {page, limit: 10});
        return res.json(escola);
    },
    async show(req, res) {
        const escola = await Escola.findById(req.params.id);
        return res.json(escola);
    },
    async store(req, res) {
        const escola = await Escola.create(req.body);
        return res.json({escola});
    },
    async destroy(req, res) {
        const escola = await Escola.findByIdAndRemove(req.params.id);
        return res.send('Ok');
    }
}