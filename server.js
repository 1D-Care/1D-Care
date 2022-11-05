const db = require('./models/index')
const userRoutes = require('./routes/users.routes')
const depositRoutes = require('./routes/monthly_deposit.routes')
const lendingRoutes = require('./routes/lending.routes')

const express = require("express")
const cors = require("cors");
const app = express()

let corsOptions = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

db.sequelize.sync().then(() => {
    console.log('Success')
}).catch((error) => {
    console.log('Error',error)
})

app.get('/',(req, res) => {
    res.json({
        message: 'Hello World'
    })
})

userRoutes(app);
depositRoutes(app);
lendingRoutes(app);

const PORT = 8081
app.listen(PORT, () => {
    console.log("Server is running on ",PORT);
})