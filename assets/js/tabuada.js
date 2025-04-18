function calcularTabuada() {

    let tabuada = document.querySelector('#tabuada tbody');
    let valorA = parseInt(document.querySelector('#valorA').value);

    tabuada.innerHTML = '';

    for (let valorB = 0; valorB <= 10; valorB ++) {
        let resultado = valorA * valorB;
        let template = `         
            <td>${valorA}</td>
            <td>X</td>
            <td>${valorB}</td>
            <td>&nbsp;</td>
            <td>${resultado}</td>
            `;

        let tr = document.createElement('tr');

        tr.innerHTML = template;

        tabuada.append(tr);

    }
}

calcularTabuada();

document.querySelector('#valorA').addEventListener('change', calcularTabuada)