let timeoutId;

function copy() {
    navigator.clipboard.writeText('willcavanagh@hotmail.com')
        .then(() => {
            updateText();
            clearTimeout(timeoutId);
            timeoutId = setTimeout(resetText, 700);
        })
        .catch(err => console.error('Failed to copy text: ', err));
}

function updateText() {
    const span = document.getElementById('mail');
    span.innerHTML = 'Copied!';
}

function resetText() {
    const span = document.getElementById('mail');
    span.innerHTML = 'Mail';
}
