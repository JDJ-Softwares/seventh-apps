var api_database = {

    user: {
        nome: "",
        cpf: "",
        email: "",
        $endereço: {}
    },
    endereço: {
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
    },
    produto: {
        nome: "",
        descrição: "",
        imagem: "",
        background: "",
        preço: "",
        ingredientes: []
    },
    menu: {
        descricao: "",
        produtos: [],
        banner: "",
        type: ""
    },
    promoção: {
        
    },
    pedido: {
        $user: {},
        produtos:[],
        valor: 00,
        entrega: false,
        retirada: true
    },

}

var analitic_database = {

    produto_preferencia: {},
    interesses: {},
    notificação: {},

}

var databaseLocal = {
    carrinho: {},
    compra: {},
}