const User = require('../../../database/user')
/**
 * 登录
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports = async ctx => {
    const query = ctx.request.body
    const { name, pwd } = query
    if (name && pwd) {
        const doc = await User.findOne({ name, pwd })
        if (doc) {
            ctx.body = {
                code: 0,
                data: doc
            }
        } else {
            ctx.body = { code: 1 }
        }
    } else {
        ctx.throw('401 error', 401)
    }
}