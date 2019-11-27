const mongoose = require('mongoose');
const Sharp = require('Sharp');
const path = require('path');
const fs = require('fs');
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
        const {
            nome, empresa, cidade, bairro, cep, especialidade, email
          } = req.body;
           //return res.json(req.body);
          const { filename: image } = req.file;
          const [name] = image.split('.');
          const fileName = `${name}.jpg`;
          await Sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(
              path.resolve(req.file.destination, 'resized', fileName),
            );
          fs.unlinkSync(req.file.path);
          const empresa1 = await Empresa.create({
            nome, empresa, cidade, bairro, cep, especialidade, email, image: fileName,
          });
          return res.json(empresa1);
    },
    async destroy(req, res) {
        const empresa = await Empresa.findByIdAndRemove(req.params.id);
        return res.send('Ok');
    }
}