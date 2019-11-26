const mongoose = require('mongoose');
const Empresa = mongoose.model('Empresa');

module.exports = {
    async index (req, res) {
        const {page = 1} = req.query;
        const empresas = await Empresa.paginate({}, {page, limit: 10});
        return res.json(empresas);
    },
    async show(req, res) {
        const empresa = await Empresa.findById(req.params.id);
        return res.json(empresa);
    },
    async store(req, res) {
        const empresa = await Empresa.create(req.body);
        return res.json(empresa);
    },
    async destroy(req, res) {
        const empresa = await Empresa.findByIdAndRemove(req.params.id);
        return res.send('Ok');
    }
}