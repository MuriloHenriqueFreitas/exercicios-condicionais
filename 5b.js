let dia = 5;
let resp;

if (dia <= 0 || dia >= 8) {
    resp = "Digite um dia da semana válido";
} else {
    switch (dia) {
        case 1:
            resp = "domingo";
            break;
        case 2:
            resp = "segunda";
            break;
        case 3:
            resp = "terça";
            break;
        case 4:
            resp = "quarta";
            break;
        case 5:
            resp = "quinta";
            break;
        case 6:
            resp = "sexta";
            break;
        case 7:
            resp = "sabado";
            break;
    }
}
console.log(resp);