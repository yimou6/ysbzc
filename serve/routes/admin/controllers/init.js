const User = require('../../../database/user')
/**
 * 初始化一个用户
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports = async ctx => {
    const doc = await User.find({})
    if (doc.length === 0) {
        const user = new User({ name: 'admin', pwd: 'mmm111' })
        await user.save()
        ctx.body = {
            code: 0
        }
    } else {
        ctx.body = {
            code: 1
        }
    }
}