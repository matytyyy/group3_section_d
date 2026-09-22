// Package imports
const express = require('express')

const app = express()

app.use(express.json())

app.use('/api/users', require('./users/users.routes'))
app.use('/api/products', require('./routes/products.routes'))
app.use('/api/orders', require('./routes/orders.routes'))
app.use('/api/categories', require('./routes/categories.routes'))
app.use('/api/notifications', require('./routes/notifications.routes'))

app.listen(43211, () => {
	console.log('Server is running on http://localhost:43211')
})
