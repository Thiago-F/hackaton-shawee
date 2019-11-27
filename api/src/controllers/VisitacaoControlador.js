const mongoose = require('mongoose');
const Visitacao = mongoose.model('Visitacao');

module.exports = {
    async showEmpresa (req, res) {
        const {page = 1} = req.query;
        const visitacao = await Visitacao.paginate({empresa: req.params.id}, {page, limit: 10});
        return res.json(visitacao);
    },
    async showEscola (req, res) {
      const {page = 1} = req.query;
      const visitacao = await Visitacao.paginate({escola: req.params.id}, {page, limit: 10});
      return res.json(visitacao);
  },
    async store(req, res) {
        const visitacao = await Visitacao.create(req.body);
        return res.json(visitacao);
    },
    async update(req, res) {
      const visitacao = await Visitacao.findByIdAndUpdate(req.params.id, req.body, {new:true});
      return res.json(visitacao);
    },
    async destroy(req, res) {
        const visitacao = await Visitacao.findByIdAndRemove(req.params.id);
        return res.send('Ok');
    }
}