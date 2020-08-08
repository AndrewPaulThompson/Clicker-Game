import buyables from './buyables'

const purchase = (data, el) => {
    const type = el.dataset.upgrade
    const upgrade = buyables[type]
    if (data.money >= upgrade.cost) {
        data.money -= upgrade.cost
        data[type]++
    }
}

export { purchase }
