const Router = require('koa-router')
const router = new Router()

router.post('/login', require('./controllers/login'))

router.get('/init', require('./controllers/init'))

module.exports = router.routes()