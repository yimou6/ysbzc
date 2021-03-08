import {
  ElButton, ElForm, ElFormItem, ElInput, ElIcon, ElLoading,
    ElMenu, ElMenuItem, ElTable, ElTableColumn, ElPagination
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
  locale.use(lang)
  app.use(ElButton)
      .use(ElForm)
      .use(ElFormItem)
      .use(ElInput)
      .use(ElIcon)
      .use(ElLoading)
      .use(ElMenu)
      .use(ElMenuItem)
      .use(ElTable)
      .use(ElTableColumn)
      .use(ElPagination)
}
