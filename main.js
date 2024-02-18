// 1
const $emojis = document.getElementById('emojis')

// 
const emojisArray = []

// 
for(let i = 128513; i < 128525; i++){
    emojisArray.push(`<span id="emojis" class="flex" style="font-size: 5rem;">&#{i};</span>`)
}

// 
$emojis.innerHTML = emojisArray.join(``)