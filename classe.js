class Matematica {
    function soma(valorA, valorB) {
        return valorA + valorB;
    }
    function subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(5,6);

console.log(resultado);