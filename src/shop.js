import buyables from './buyables'

const purchase = (data, type) => {
    const upgrade = buyables[type]
    if (data.money >= upgrade.cost) {
        data.money -= upgrade.cost
        data[type]++
    }
}

export { purchase }
