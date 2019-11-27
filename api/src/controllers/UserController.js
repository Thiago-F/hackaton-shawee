const mongoose = require('mongoose');
const User = mongoose.model('User');
const Escola = mongoose.model('Escola');
const Empresa = mongoose.model('Empresa');
module.exports = {

    async store(req, res) {

       const query = Escola.findOne(req.params);
       const resul = await query.exec();
       return res.json(resul.id);

    },
    async store2(req, res) {

        const query = Empresa.findOne(req.params);
        const resul = await query.exec();
        return res.json(resul.id);
 
     }
}