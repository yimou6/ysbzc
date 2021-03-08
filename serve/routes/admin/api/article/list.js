const Article = require('../../../../database/article')

module.exports = async ctx => {
    const params = ctx.request.body
    const {
        limit = 10,
        current = 1,
        title = ''
    } = params
    const skip = (current - 1) * limit
    const titleReg = new RegExp(title || '\\S', 'g')
    const count = await Article.countDocuments({ title: { $regex: titleReg } })
    const docs = await Article.find({
        title: titleReg
    }).skip(skip).limit(limit)
    return ctx.body = {
        code: 0,
        data: {
            docs,
            count
        }
    }
}
