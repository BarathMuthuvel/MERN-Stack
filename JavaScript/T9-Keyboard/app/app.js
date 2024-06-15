let output = document.getElementById('output');
let lastKeyPress = null;
let keyPressCount = 0;
let t9Timeout;

function resetKeyPress() {
    lastKeyPress = null;
    keyPressCount = 0;
}

document.getElementById('keyboard').addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        let keys = e.target.getAttribute('data-keys');

        if (keys === ' ') {
            output.innerText += ' ';
            resetKeyPress();
        } else if (keys === 'back') {
            output.innerText = output.innerText.slice(0, -1);
            resetKeyPress();
        } else {
            if (lastKeyPress === keys) {
                keyPressCount++;
                if (keyPressCount >= keys.length) {
                    keyPressCount = 0;
                }
                output.innerText = output.innerText.slice(0, -1);
            } else {
                lastKeyPress = keys;
                keyPressCount = 0;
            }
            clearTimeout(t9Timeout);
            output.innerText += keys[keyPressCount];
            t9Timeout = setTimeout(resetKeyPress, 1000);
        }
    }
});


