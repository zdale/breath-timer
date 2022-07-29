const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 16000
const breatheTime = totalTime / 4
const holdTime = totalTime / 4

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Breathe In'
    container.className = 'container grow'

    setTimeout(() => {

        text.innerHTML = 'Hold'
        setTimeout(() => {
            text.innerHTML = 'Breathe Out'
            container.className = 'container shrink'
            setTimeout(() => {
                text.innerHTML = 'Hold'
            }, holdTime)
        }, holdTime)

    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)