const Router = require('koa-router')
const router = new Router()

router.get('/init', require('./api/common/init'))

router.post('/login', require('./api/common/login'))

router.post('/article/list', require('./api/article/list'))
router.post('/article/add', require('./api/article/add'))

module.exports = router.routes()
