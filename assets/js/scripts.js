const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = (peso / (altura * altura)).toFixed(2);

    const result = document.getElementById('result');
    let description = `${nome} seu IMC é de ${imc}`;

    document.getElementById('results').classList.remove('hidden');

    result.textContent = imc.replace('.', ',');
    document.getElementById('result').textContent = description;
});