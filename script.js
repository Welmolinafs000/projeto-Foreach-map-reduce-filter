const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

const formatCurrency = (value) => {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
}

const showAll = (productArray) => {
    let myLi = ''
    productArray.forEach(product => {
        myLi += ` 
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class='item-price'>R$ ${formatCurrency(product.price)}</p>
                </li>
                `
    });
    list.innerHTML = myLi
}

const mapAll = () => {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))

    showAll(newPrice)
}

const sumAll = () => {
    const sumAllItens = menuOptions.reduce((acc, product) => {
        return acc + product.price
    }, 0)

    list.innerHTML = `
        <li>
            <p>A soma de <br> todos os itens é :<br> ${formatCurrency(sumAllItens)}</p>
        </li>
    `
}

const filterAll = () => {
    const filterVeganItens = menuOptions.filter((product) => product.vegan === true)

    showAll(filterVeganItens)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
buttonSumAll.addEventListener('click', sumAll)
buttonFilterAll.addEventListener('click', filterAll)