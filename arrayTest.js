const json1 = [
    { name: 'Om', age: 12 }
]

const json2 = [
    { name: 'Kaka', age: 15 },
    { name: 'Kaka', age: 15 }
]

const json3 = [
    { name: 'Om', age: 12 }
]

if (json1.length === json2.length) {
    console.log('same')
} else {
    console.log('different')
}