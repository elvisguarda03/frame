class NegociacaoController {
    constructor() {
        //Mantendo a associação com o document(contexto de execução)
        //Recebendo a referência de uma nova function, que passa a ter o objeto document como this.
        //Ou seja, a função bind presente em todas as functions, permite indicar qual será o valor de this quando ela for executada.
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    // Functional Programming is a form of programming in which you can pass functions as
    // parameters to other functions and also return them as values.

    //In JavaScript functions are a special type of objects

    //harmful - Prejudicial
    //dive into - mergulhar
    //deal - lidar

    //O conceito de High Order Functions é muito comum em Programação funcional, onde o conceito é evitar o state e
    //usar funções, encadeamento de funções para fazer o que é preciso fazer pelo programa. Funções que aceitem outras
    // funções como argumentos são chamadas de high-order functions.
    // A função não muda um estado de uma variável, é simplesmente uma ferramenta para ser encadeada
    // ou seja uma função de ordem superior, ou seja uma ferramenta para criar outras funções.

    adicionar(event) {
        event.preventDefault();

        console.log(typeof (this._inputData.value));

        // new Date(this._inputData.value.split('-')); => this._inputData.value.split('-').join(',');

        //Expressão regular - /-/g = (Todas as ocorrências da String)
        //new Date(this._inputData.replace(/-/g, ','));

        let negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            this._inputQuantidade,
            this._inputValor.value
        );

        //Spread Operator Js
        console.log(new Date(...this._inputData.value
            .split('-')
            .map( (item, index) => item - index % 2)));
            //Arrow Function
            //Criando um novo array baseado no atual


        //adicionar negociação
    }
}