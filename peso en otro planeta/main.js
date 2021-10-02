// alert('hola mundo');

let usuario = prompt('¿Cuál es tu peso?');
let planeta = prompt('Elige tu planeta.\n 1 es Mercurio,\n 2 es Venus \n 3 es Marte \n 4 es Júpiter\n 5 es Saturno\n 6 es Urano\n 7 es Neptuno\n 8 es Plutón\n 0 es El Sol\n 10 para TODOS JUNTOS');
let peso = parseFloat(usuario);
let g_sol = 27.9;
let g_mercurio = 3.7;
let g_venus = 8.9;
let g_tierra = 9.8;
let g_marte = 3.7;
let g_jupiter = 24.8;
let g_saturno = 10.4;
let g_urano = 8.7;
let g_neptuno = 11.2;
let g_pluton = 0.6;
let peso_final;
// peso_final.classlist.add('resultado');


if (planeta == 1) {
    // peso en Mercurio

    peso_final = peso * g_mercurio / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Mercurio es: ' + peso_final + 'kg');
} else if (planeta == 2) {
    // Peso en Venus

    peso_final = peso * g_venus / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Venus es: <strong> ' + peso_final + ' kilos </strong>');
    document.write('<br >');
} else if (planeta == 3) {
    // Peso en Marte

    peso_final = peso * g_marte / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Marte es: <strong> ' + peso_final + ' kilos </strong>');
} else if (planeta == 4) {
    // Peso en Júpiter
    peso_final = peso * g_jupiter / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Júpiter es: <strong> ' + peso_final + ' kilos </strong>');


} else if (planeta == 5) {
    // Peso en Saturno
    peso_final = peso * g_saturno / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Saturno es: <strong> ' + peso_final + ' kilos </strong>');
    document.write('<br >');
} else if (planeta == 6) {
    // Peso en Urano
    peso_final = peso * g_urano / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Urano es: <strong> ' + peso_final + ' kilos </strong>');
} else if (planeta == 7) {
    // Peso en Neptuno
    peso_final = peso * g_neptuno / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Sol es: <strong> ' + peso_final + ' kilos </strong>');
} else if (planeta == 8) {
    // Peso en Plutón
    peso_final = peso * g_pluton / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Plutón es: <strong> ' + peso_final + ' kilos </strong>');
} else if (planeta == 0) {
    // Peso en Sol
    peso_final = peso * g_sol / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Sol es: <strong> ' + peso_final + ' kilos </strong>');
} else if (planeta == 10) {
    // Todos los planetas:
    peso_final = peso * g_mercurio / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Mercurio es: <strong> ' + peso_final + ' kilos </strong>');
    document.write('<br >');
    peso_final = peso * g_venus / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Venus es: <strong> ' + peso_final + ' kilos </strong>');
    document.write('<br >');
    peso_final = peso * g_marte / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Marte es: <strong> ' + peso_final + ' kilos </strong>');
    document.write('<br >');
    peso_final = peso * g_jupiter / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Júpiter es: <strong> ' + peso_final + ' kilos </strong>');
    document.write('<br >');
    peso_final = peso * g_saturno / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Saturno es: <strong> ' + peso_final + ' kilos </strong>');
    document.write('<br >');
    peso_final = peso * g_urano / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Urano es: <strong> ' + peso_final + ' kilos </strong>');
    document.write('<br >');
    peso_final = peso * g_neptuno / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Neptuno es: <strong> ' + peso_final + ' kilos </strong>');
    document.write('<br >');
    peso_final = peso * g_pluton / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Plutón es: <strong> ' + peso_final + ' kilos </strong>');
    document.write('<br >');
    peso_final = peso * g_sol / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(1);
    document.write('Tu peso en Sol es: <strong> ' + peso_final + ' kilos </strong>');

} else {
    document.write('<strong> 😒 Son planetas del 1 al 7.\n Si no escoges un planeta válido a partir de ahora subirás 50 kilos </strong>');
}