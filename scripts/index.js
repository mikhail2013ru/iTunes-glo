import { radioPlayerInit } from "./radioPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";

const playerBtn = document.querySelectorAll('.player-btn')
const playerBlock = document.querySelectorAll('.player-block')
const temp = document.querySelector('.temp')

const deactivationPlayer = () => {
    temp.style.display = 'none'
    playerBtn.forEach((Btn) => {
        console.log(Btn);
        Btn.classList.remove('active')
    })
    playerBlock.forEach((Block) => {
        Block.classList.remove('active')
    })

    musicPlayerInit.stop()
    videoPlayerInit.stop()
    radioPlayerInit.stop()
}

playerBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        deactivationPlayer()
        btn.classList.add('active')
        playerBlock[i].classList.add('active')
    })
})

videoPlayerInit()
radioPlayerInit()
musicPlayerInit()