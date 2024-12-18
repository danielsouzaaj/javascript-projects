const uInput = document.getElementById('date')
const result = document.getElementById('result')
uInput.max = new Date().toISOString().split("T")[0]

function calculateAge() {
    const birthDate = new Date(uInput.value);
    const today = new Date()

    let day = today.getDate() - birthDate.getDate()
    let month = today.getMonth() - birthDate.getMonth()
    let year = today.getFullYear() - birthDate.getFullYear()

    if(day < 0) {
        month -= 1
        day += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    if(month < 0) {
        year -= 1
        month += 12
    }
    
    result.innerHTML = `Sua idade: <span>${year}</span> anos, <span>${month}</span> meses e <span>${day}</span> dias`
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
}