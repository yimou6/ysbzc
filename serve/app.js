const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const cors = require('@koa/cors')
const port = process.env.PORT || 5050

const app = new Koa()
const router = new Router()

app.use(cors())

app.use(BodyParser({
    enableTypes: ['json', 'form'],
    jsonLimit: '5mb',
    strict: true,
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422)
    }
}))

// API routes
require('./routes')(router)
app.use(router.routes())
app.use(router.allowedMethods())

mongoose.connect('mongodb://127.0.0.1:27017', {
    dbName: 'testDB',
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        app.listen(port, () => {
            console.log(`API server started on ${port}`)
        })
    },
    err => {
        // console.log(err)
        console.log('database connect error')
    }
)
