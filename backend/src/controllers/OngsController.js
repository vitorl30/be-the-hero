const crypto = require('crypto');
const connection = require('../database/connection')

module.exports = {

   async index(req, res){
        const ongs = await connection('ongs').select('*')

        res.json(ongs)
    },

    async create(req, res) {
    const {name, email, whatsapp,city, uf} = req.body;
    console.log({name, email, whatsapp,city, uf});

    const id = crypto.randomBytes(4).toString('HEX')

   await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return res.json(id)

    }
}