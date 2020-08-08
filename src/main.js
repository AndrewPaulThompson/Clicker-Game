import { purchase } from './shop'
import { setup, store } from './store'
import { updateMoney, updateGain } from './data-utils'

window.addEventListener('DOMContentLoaded', (event) => {
    // Setup & add detail to screen
    let data = setup()

    // Setup game loop
    let delta = 0
    const interval = 50
    const counter = document.getElementById('counter')
    
    const onTimerTick = () => {
        delta += interval
        updateGain(data)

        if (delta >= 1000) {
            updateMoney(data)
            delta = 0
        }
        
        store(data)
        counter.innerHTML = `Money: ${data.money} (+${data.gain})`
    }

    setInterval(onTimerTick, interval);
    
    document.getElementById('clicker').addEventListener('click', e => {
        data.money++
    })

    Array.from(document.getElementsByClassName('buy')).forEach(el => {
        el.addEventListener('click', e => {
            purchase(data, el.dataset.upgrade)
        })
    })
})
