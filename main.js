// 1
const $emojis = document.getElementById('emojis')

// 
const emojisArray = []

// 
for(let i = 128513; i < 128525; i++){
    emojisArray.push(`<div><span id="emojis">&#${i}</span>
    <code>${i}</code></div>`)
}

// 
$emojis.innerHTML = emojisArray.join(``)