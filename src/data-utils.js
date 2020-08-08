import buyables from './buyables'

const updateMoney = (data) => {
    data.money += data.gain
}

const updateGain = (data) => {
    data.gain = 0
    for (let item in buyables) {
        data.gain += data[item] * buyables[item].production
    }
}

export { updateMoney, updateGain }
