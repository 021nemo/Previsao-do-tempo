

const key = ""
/*fomos em um site que buscamos essa chave de api gerada para nossa conta*/

function cliqueinobotao() {   
    const input = document.querySelector(".input-cidade").value
    /*Para essa function funcionar nos fomos na parte de html nomear o botão com essa função. ex: 'onclick="cliqueinobotao()" ' */

    /*Nomeamos essa função de "cliqueinobotão", agora chega o momento que vamos botar pra funcionar nosso termometro digital. Para isso dentro da função ele chama uma variavel chamada de input 'const input =' . dentro do 'input' ele vai la no html usando 'document' (document é o apelido do html dentro do js), depois ele utiliza um '.querySelector' (o . na frente do queryselctor e pra dizer que estamos procurando uma classe) que serve pra procurar algumas coisas que estão dentro do html, exemplo: 'document.querySelector(".input-cidade").value'
    nesse caso tem o ".value" no final pq a gnt quer que so mostre o valor, não o input inteiro.
    o 'console.log(input)' vai mostrar na tela de console do chrome. após esse processo se pesquisarmos alguma cidade dentro da nossa aplicação já vai aparecer no inspencionar-console do chrome. O proximo passo e pegar a informação que vai sair no 'console.log' que no caso é a cidade e vincular ao servidor.
    Segundo o site onde geramos nossa 'key' para fazer isso é necessário enviar a informação da key da 'API key' e da cidade ex: 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}' */ 

    console.log(input)
}
