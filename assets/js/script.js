var qtdeMaca = 0;
var qtdeBanana = 0;
var qtdeArroz = 0;
var qtdeOleo = 0;
var qtdeDetergente = 0;
var qtdeDesinfetante = 0;

document.getElementById('qtdeMaca').innerHTML = qtdeMaca;
document.getElementById('qtdeBanana').innerHTML = qtdeBanana;
document.getElementById('qtdeArroz').innerHTML = qtdeArroz;
document.getElementById('qtdeOleo').innerHTML = qtdeOleo;
document.getElementById('qtdeDetergente').innerHTML = qtdeDetergente;
document.getElementById('qtdeDesinfetante').innerHTML = qtdeDesinfetante;

function adiciona(produto) {
    switch (produto) {
        case 'maca':
            document.getElementById('qtdeMaca').innerHTML = Number(document.getElementById('qtdeMaca').innerHTML) + 1;
            break;
        case 'banana':
            document.getElementById('qtdeBanana').innerHTML = Number(document.getElementById('qtdeBanana').innerHTML) + 1;;
            break;
        case 'arroz':
            document.getElementById('qtdeArroz').innerHTML = Number(document.getElementById('qtdeArroz').innerHTML) + 1;;
            break;
        case 'oleo':
            document.getElementById('qtdeOleo').innerHTML = Number(document.getElementById('qtdeOleo').innerHTML) + 1;;
            break;
        case 'detergente':
            document.getElementById('qtdeDetergente').innerHTML = Number(document.getElementById('qtdeDetergente').innerHTML) + 1;;
            break;
        case 'desinfetante':
            document.getElementById('qtdeDesinfetante').innerHTML = Number(document.getElementById('qtdeDesinfetante').innerHTML) + 1;;
            break;
    }
}