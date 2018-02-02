class Pessoa {
    constructor(nome, sobreNome, peso, altura, idade)
    {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
    }

    nomeCompleto(){
        return `${this.nome} ${this.sobreNome}`;
    }


    anoNascimento(){
        var data = new Date();
        return data;
    }

    IMC(){
        return peso / (altura^2)
    }
}


class Medico extends Pessoa {
    constructor(nome, sobreNome, peso, altura, idade, crm){
        super(nome, sobreNome, peso, altura, idade)
        this._crm = crm;
    }

    get crm(){
        return this._crm;
    }
    
    set crm(crm){
        this_crm = crm;
    }
}


class Casa{
    constructor(comodos, valor, alugada, vendedor)
    {
        this._comodos = comodos;
        this._valor = valor;
        this._alugada = alugada;
        this._vendedor = vendedor;
    }

    get comodos(){
        return this._comodos;
    }

    set comodos(comodos){
        this._comodos = comodos;
    }

    get valor(){
        return this._valor;
    }

    set valor(valor){
        this._valor = valor;
    }

    get alugada(){
        return this._alugada;
    }

    set alugada(alugada){
        this._alugada = alugada;
    }

    get vendedor(){
        return this._vendedor;
    }

    set vendedor(vendedor){
        this._vendedor = vendedor;
    }
}

class Apartamento extends Casa{
    constructor(comodos, valor, alugada, vendedor, bloco, andar)
    {
        super(comodos, valor, alugada, vendedor);
        this._bloco = bloco;
        this._andar = andar;
    }

    get bloco(){
        return this._bloco;
    }

    set bloco(bloco){
        this._bloco = bloco;
    }

    get bloco(){
        return this._bloco;
    }

    set bloco(bloco){
        this._bloco = bloco;
    }
}