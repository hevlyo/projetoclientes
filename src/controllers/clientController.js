const Cliente = require('../models/clientModel.js');

// Listar todos os clientes
exports.listClients = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao listar os clientes' });
    }
};

// Listar um cliente pelo ID
exports.getClientById = async (req, res) => {
    const ClientId = req.params.id;
    try {
        const cliente = await Cliente.findByPk(ClientId);
        if (!cliente) {
            res.status(404).json({ msg: 'Cliente não encontrado' });
            return;
        }
        res.json(cliente);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao listar o cliente' });
    }
}

// Criar um novo cliente
exports.createClient = async (req, res) => {
    const { nome, salario, endereco, cep, telefone, email } = req.body;

    try {
        const cliente = await Cliente.create({
            nome,
            salario,
            endereco,
            cep,
            telefone,
            email
        });
        res.status(201).json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao criar o cliente' });
    }
}

// Atualizar um cliente
exports.updateClient = async (req, res) => {
    const ClientId = req.params.id;
    try {
        const cliente = await Cliente.findByPk(ClientId);
        if (!cliente) {
            res.status(404).json({ msg: 'Cliente não encontrado' });
            return;
        }
        await cliente.update({ nome, salario, endereco, cep, telefone, email });
        res.json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao atualizar o cliente' });
    }
}

// Excluir um cliente
exports.deleteClient = async (req, res) => {
    const ClientId = req.params.id;
    try {
        const cliente = await Cliente.findByPk(ClientId);
        if (!cliente) {
            res.status(404).json({ msg: 'Cliente não encontrado' });
            return;
        }
        await cliente.destroy();
        res.json({ msg: 'Cliente excluído com sucesso' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao excluir o cliente' });
    }
}