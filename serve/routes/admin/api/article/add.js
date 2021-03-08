const Article = require('../../../../database/article')
const Tag = require('../../../../database/tag')
module.exports = async ctx => {
    const params = ctx.request.body
    const {
        title,
        tag,
        md
    } = params
    if (!Array.isArray(tag)) return ctx.body = { code: 1 }

    const { err, docs: tags } = await Tag.find({ title: { $in: tag }})
    if (err) return ctx.body = { code: 1 }
    if (!tags || (tags && tags.length < tag.length)) {
        const tagList = []
        const list = tags || []
        tag.forEach(it => {
            if (!list.includes(it)) {
                tagList.push(new Tag({
                    title: it
                }))
            }
        })
        await Tag.insertMany(tagList)
    }

    const article = new Article({
        title,
        tag,
        md,
        createDate: Date.now()
    })
    const { err: error } = await article.save()
    if (error) return ctx.body = { code: 1 }

    return ctx.body = { code: 0 }
}
