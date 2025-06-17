const form = document.getElementById('service-form')
const formGroups = form.querySelectorAll('.form-group')
const calendar = document.getElementById('data')

const date = new Date().toISOString().split("T")[0]

async function mapSelect() {
    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        const states = await response.json()

        states.sort((a, b) => a.nome.localeCompare(b.nome))

        const statesSelect = document.querySelector('select')

        statesSelect.innerHTML = '<option value="">Selecione um estado</option>'

        states.forEach(estado => {
            const option = document.createElement('option')
            option.value = estado.sigla
            option.textContent = estado.nome
            statesSelect.appendChild(option)
        })
    } catch (error) {
        console.error('Erro ao carregar estados:', error)
        const statesSelect = document.querySelector('select')
        statesSelect.innerHTML = '<option value="">Erro ao carregar estados</option>'
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let isValid = true

    formGroups.forEach(group => {
        const input = group.querySelector('input, select')
        const errorSpan = group.querySelector('.error-message')

        if (!input.value) {
            alert("Preencha todos os campos!")
        } else {
            errorSpan.textContent = ''
        }
    })

    if (isValid) {
        alert('Formulário enviado com sucesso!')
        form.reset()
        calendar.value = date
    }
})

formGroups.forEach(group => {
    const input = group.querySelector('input, select')
    const errorSpan = group.querySelector('.error-message')

    input.addEventListener('blur', () => {
        if (!input.value) {
            errorSpan.textContent = `Por favor, preencha ${input.previousElementSibling.textContent.toLowerCase()}.`
            errorSpan.style.color = 'red'
            errorSpan.style.fontSize = 'x-small'
        } else {
            errorSpan.textContent = ''
        }
    })
})

window.onload = (function () {
    calendar.setAttribute('min', date)
    calendar.value = date
    mapSelect()
})()