const Produto = require('../models/productModel.js');

// Listar todos os produtos
exports.listProducts = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.json(produtos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao listar os produtos' });
    }
};

// Listar um produto pelo ID
exports.getProductById = async (req, res) => {
    const ProductId = req.params.id;
    try {
        const produto = await Produto.findByPk(ProductId);
        if (!produto) {
            res.status(404).json({ msg: 'Produto não encontrado' });
            return;
        }
        res.json(produto);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao listar o produto' });
    }
}

// Criar um novo produto
exports.createProduct = async (req, res) => {
    const { nome, preco, descricao, categoria, estoque } = req.body;

    try {
        const produto = await Produto.create({
            nome,
            preco,
            descricao,
            categoria,
            estoque
        });
        res.status(201).json(produto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao criar o produto' });
    }
}

// Atualizar um produto
exports.updateProduct = async (req, res) => {
    const ProductId = req.params.id;
    const { nome, preco, descricao, quantidade } = req.body;
    try {
        const produto = await Produto.findByPk(ProductId);
        if (!produto) {
            res.status(404).json({ msg: 'Produto não encontrado' });
            return;
        }
        produto.nome = nome;
        produto.preco = preco;
        produto.descricao = descricao;
        produto.quantidade = quantidade;
        produto.save();
        res.json(produto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao atualizar o produto' });
    }
}

// Excluir um produto
exports.deleteProduct = async (req, res) => {
    const ProductId = req.params.id;
    try {
        const produto = await Produto.findByPk(ProductId);
        if (!produto) {
            res.status(404).json({ msg: 'Produto não encontrado' });
            return;
        }
        await produto.destroy();
        res.json({ msg: 'Produto excluído com sucesso' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Erro ao excluir o produto' });
    }
}
