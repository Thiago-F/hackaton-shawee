const mongoose = require('mongoose');
const Empresa = mongoose.model('Empresa');

module.exports = {
    async index (req, res) {
        const {cidade, bairro, cep, page = 1} = req.query;
        let empresas = '';
        if (cidade && !bairro && !cep) {
            empresas = await Empresa.paginate({ cidade }, {page, limit: 10});
        } else if (!cidade && bairro && !cep) {
            empresas = await Empresa.paginate({ bairro }, {page, limit: 10});
        } else if (!cidade && !bairro && cep) {
            empresas = await Empresa.paginate({ cep }, {page, limit: 10});
        } else if (cidade && bairro && !cep) {
            empresas = await Empresa.paginate({ cidade, bairro }, {page, limit: 10})
        } else if (cidade && !bairro && cep) {
            empresas = await Empresa.paginate({ cidade, cep }, {page, limit: 10});
        } else if (!cidade && bairro && cep) {
            empresas = await Empresa.paginate({ bairro, cep }, {page, limit: 10});
        } else if (cidade && bairro && cep) {
            empresas = await Empresa.paginate({ cidade, bairro, cep }, {page, limit: 10})
        }
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