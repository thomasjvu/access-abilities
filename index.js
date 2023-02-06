const pa11y = require('pa11y')
const express = require('express')
const PORT = process.env.PORT || 3005
const app = express()

// Debug Pa11y
// async function run() {
//     const response = await pa11y('https://thomasjvu.com')
//     console.log(response)
// }

// run()

app.use(express.static('public'))

// Routes
app.get('/api/test', async (req, res) => {
    if(!req.query.url) {
        res.status(400).json({error: 'url is required'})
    } else {
        const results = await pa11y(req.query.url)
        res.status(200).json(results)
    }
})

// Listen
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
