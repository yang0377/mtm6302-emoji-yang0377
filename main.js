// 1
const $emojis = document.getElementById('emojis')

// 
const emojisArray = []

// 
for(let i = 128513; i < 128525; i++){
    emojisArray.push(`<div class="items"><span class="emojiitem">&#${i}</span>
    <code class="codes">${i}</code></div>`)
}

// 
$emojis.innerHTML = emojisArray.join(``)