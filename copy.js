let isCopy = false

function copy() {
    navigator.clipboard.writeText('willcavanagh@hotmail.com'); 
    updateText()
    setTimeout(updateText, 2000);
}

function updateText() {
    let button = document.getElementById('mail')
    let content = button.innerHTML
    if (isCopy) {
        button.innerHTML = content.replace('Copied!', 'Mail')
    } else {
        button.innerHTML = content.replace('Mail', 'Copied!')
    }
    isCopy = !isCopy
}