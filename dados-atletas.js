class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
        if(this.idade >= 9 && this.idade<= 11){
            return "Infantil";
        } else if( this.idade >= 12 && this.idade <= 13){
            return "Juvenil";
        } else if( this.idade >= 14 && this.idade <= 15){
            return "Intermediário";
        } else if( this.idade >= 16 && this.idade <= 30){
            return "Adulto";
        } else{
            return "Sem categoria"
        }
    }

    calculaIMC(){
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    calculaMediaValida(){
        let notasValidas = this.notas.sort().slice(1, this.notas.length -1);
        let somaDasNotas = 0;
        let somaDasNotasValidas = notasValidas.reduce((acumulador, valorAtual)=> acumulador + valorAtual, somaDasNotas
        );
        let mediaValida = somaDasNotasValidas / notasValidas.length;
        return mediaValida
    }
    obtemNomeAtleta(){
        console.log("Nome: " + this.nome);
    }
    ObtemIdadeAtleta(){
        console.log("Idade: " + this.idade);
    }
    obtemPesoAtleta(){
        console.log("Peso: " + this.peso);
    }
    obtemAlturaAtleta(){
        console.log("Altura: " + this.altura);
    }
    obtemNotasAtleta(){
        console.log("Notas: " + this.notas);
    }
    obtemCategoria(){
        console.log("Categoria: " + this.calculaCategoria());
    }
    obtemIMC(){
        console.log("IMC: " + this.calculaIMC());
    }
    obtemMediaValida(){
        console.log("Média válida: " + this.calculaMediaValida());
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);



atleta.obtemNomeAtleta();
atleta.ObtemIdadeAtleta();
atleta.obtemPesoAtleta();
atleta.obtemNotasAtleta();
atleta.obtemCategoria();
atleta.obtemIMC();
atleta.obtemMediaValida();