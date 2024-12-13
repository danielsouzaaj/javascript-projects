const notesContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.btn')
let notes = document.querySelectorAll('.input-box')

createBtn.addEventListener('click', () => {
    const inputBox = document.createElement('p')
    const deleteImg = document.createElement('img')

    inputBox.setAttribute('contenteditable', 'true')
    inputBox.setAttribute('class', 'input-box')

    deleteImg.setAttribute('src', './assets/images/delete.png')

    inputBox.appendChild(deleteImg)
    notesContainer.appendChild(inputBox)
})

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('@notes')
}

function UpdatedStorage() {
    localStorage.setItem('@notes', notesContainer.innerHTML)
}

showNotes()

notesContainer.addEventListener('click', (event) => {
    if(event.target.tagName === 'IMG') {
        event.target.parentElement.remove()
        UpdatedStorage()
    }

    if(event.target.tagName === 'P') {
        console.log('entrei')
        notes = document.querySelectorAll('.input-box')
        // console.log(notes)
        notes.forEach(note  => {
            console.log(note)
            note.addEventListener('keyup', () => {
                console.log('issoo')
                UpdatedStorage()
            })
        })
    }
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        document.execCommand('insertLineBreak')
        event.preventDefault()
    }
})
