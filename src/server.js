const connect = require('./config/db')
const app = require('./index')

app.listen(5050, async () => {
    try {
        await connect()
        console.log("Listening On PORT 5050")
    }
    catch (err) {
        console.log(err)
    }
})