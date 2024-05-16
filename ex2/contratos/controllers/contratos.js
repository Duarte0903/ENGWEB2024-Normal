var Contrato = require('../models/contratos');

module.exports.list = () => {
    return Contrato.find().exec();
}

module.exports.getById = id => {
    return Contrato.findOne({idcontrato: id}).exec();
}

module.exports.getByEntidade = entidade => {
    return Contrato.find({entidade_comunicante: entidade}).exec();
}   

module.exports.getByNIPC = nipc => {
    return Contrato.find({NIPC_entidade_comunicante: nipc}).exec();
}

module.exports.getByTipo = tipo => {
    return Contrato.find({tipoprocedimento: tipo}).exec();
}

module.exports.listEntidades = () => {
    return Contrato.distinct("entidade_comunicante").exec();
}

module.exports.listTipos = () => {
    return Contrato.distinct("tipoprocedimento").exec();
}

module.exports.remove = id => {
    return Contrato.deleteOne({idcontrato: id});
}

module.exports.insert = contrato => {
    return Contrato.create(contrato);
};   

module.exports.update = (id, contrato) => {
    return Contrato.updateOne({idcontrato: id}, contrato);
}

module.exports.getSomatorioContratos = async (nipc) => {
    try {
        const resultado = await Contrato.aggregate([
            { $match: { NIPC_entidade_comunicante: nipc } },
            { $group: { _id: null, total: { $sum: { $toDouble: { $replaceAll: { input: "$precoContratual", find: ",", replacement: "." } } } } } }
        ]).exec();

        return resultado.length > 0 ? resultado[0].total : 0;
    } catch (error) {
        throw new Error(error.message);
    }
};