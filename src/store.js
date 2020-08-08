import buyables from './buyables'

const setup = () => {
    let store = JSON.parse(localStorage.getItem('clicker'))

    if (store === null) {
        store = { money: 1000, gain: 0 }
    }

    for (let item in buyables) {
        store[item] = item in store ? store[item] : 0
    }

    localStorage.setItem('clicker', JSON.stringify(store))
    return store
}

const store = (data) => {
    localStorage.setItem('clicker', JSON.stringify(data))
}

export { setup, store }
