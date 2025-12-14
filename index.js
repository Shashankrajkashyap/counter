let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let saveBtn = document.getElementById("btn-save")

let count = 0

function setSaveEnabled() {
    saveBtn.disabled = count === 0
}

function increment(){
    count += 1
    countEl.innerText = count
    setSaveEnabled()
}

function save(){
    if (count === 0) return
    saveEl.textContent += count + " - "
    count = 0
    countEl.innerText = count
    setSaveEnabled()
}

// initialize state
setSaveEnabled()