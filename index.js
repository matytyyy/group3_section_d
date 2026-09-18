// Package imports
const express = require('express')

const app = express()

app.use(express.json())

app.use('/', require('./routes/users.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/products', require('./routes/users.routes'))
app.use('/api/orders', require('./routes/users.routes'))
app.use('/api/categories', require('./routes/users.routes'))
app.use('/api/notifications', require('./routes/users.routes'))

app.listen(4321, () => {
	console.log('Server is running on http://localhost:4321')
})
