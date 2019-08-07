class Negociacao {
    //Underscore é uma convenção para o programador dizendo que a propriedade em questão só pode ser acessada por meio de um método
    constructor(data, quantidade, valor) {
        //Criando uma nova data para garantir a imutabilidade desse objeto
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        //Object.freeze - congelando o objeto com todas as suas propriedades.
        Object.freeze(this);
    }

    get volume() {
        return this._valor * this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get quantidade() {
        return this._quantidade;
    }

    get data() {
        //Devolvendo uma nova data para garantir a imutabilidade(Programação Defensiva)
        return new Date(this._data.getTime());
    }

    //negociacao.data.setDate(negociacao.data.getDate() + 1); Somando um dia baseado na data

    //Declarações com var possuem escopo de função ou global. Variáveis declaradas com let tem escopo de bloco e o
    // JavaScript lançará um erro se a mesma for declarada mais de uma vez.

    //Uma maneira de evitar que o valor da variável vaze para fora do if é a seguinte:

    //var idade = 18;
    // var temCarteira = true;
    //
    // (function() {
    //     if(idade >= 18 && temCarteira) {
    //         var msg = 'Pode dirigir';
    //         console.log(msg);
    //     }
    // })();
    //
    // alert(msg); // exibe undefined

    
}