//1 - crie uma função que exiba uma mensagem no console
function MostrarMensagem () {
    console.log (`Exibição de mensagem na tela`)
}
MostrarMensagem ()

//2 - crie uma função que receba o seu nome como parâmetro e exiba no console
function Meunome (nome) {
    console.log (`Me chamo ${nome}`)
}
Meunome (`Beatriz`)

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function Informaçoes (nome, idade, estiloMusical) {
    console.log (`Me chamo ${nome}, tenho ${idade} anos e curto o estilo músical ${estiloMusical}`)
}
    Informaçoes (`Beatriz`, 24, `Rap Nacional`)

    //4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
    function filmeMusica (musica, filme) {
        console.log (`Um exemplo de música que gosto muito nesse estilo musical é a ${musica} e pegando esse gancho, vou citar um filme que adoro que é o: ${filme}`)
    }
    filmeMusica (`Capricorniana`, `A procura da felicidade`)

    //5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
    function triplo (numero) {
        return numero * 3
    }
    console.log (triplo(5))

    //6 - crie uma função que  verifique se uma  variável é true ou false
    function verificar (n1, n2) {
        if (n1 < n2) {
            console.log (`True`); //n1= 2 e 2 < 4
        } else {
            console.log (`False`); 
        }
    }
    verificar (2,4)












