const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=c99ccfaabc20c162b579559fd619d40a&query=40,-75'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        console.log(JSON.parse(data))
    })
})


request.on('error', (error) => {
    console.log(error)
})

request.end()