//object shorthand property with ES6

const name = 'OM'
const age = 19

const user = {
    name, //using name only, instead of name:name
    userAge: age,
    address: 'Surat'
}

// console.log(user)

const product = {
    company: 'Rolex',
    purchasePrice: 20,
    sellingPrice: 60,
    sales: 100
}

const { company, sales } = product //destructuring object with shorthand syntax

// console.log(company, sales)

const transcations = (items, { sellingPrice }) => { //directly using destructuring logic inside function arguments
    console.log(items)
    console.log(sellingPrice)
}

transcations(5, product)