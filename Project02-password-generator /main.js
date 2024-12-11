const passwordBox = document.getElementById('password')
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "@#$%^&*()_+~|{}[]></-="

const allChars = upperCase + lowerCase + numbers + symbols

function createPassword() {
    let password = ''

    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while(lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password
}

function copyPassword() {
    if (passwordBox.value.length == 12) {
        navigator.clipboard.writeText(passwordBox.value)
    }
}