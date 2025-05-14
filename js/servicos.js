async function mapSelect() {
    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const states = await response.json();

        states.sort((a, b) => a.nome.localeCompare(b.nome));

        const statesSelect = document.querySelector('select');

        statesSelect.innerHTML = '<option value="">Selecione um estado</option>';

        states.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado.sigla;
            option.textContent = estado.nome;
            statesSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar estados:', error);
        const statesSelect = document.querySelector('select');
        statesSelect.innerHTML = '<option value="">Erro ao carregar estados</option>';
    }
}

window.onload = mapSelect;