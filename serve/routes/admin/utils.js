module.exports = {
    /**
     * 验证参数
     * @param params {Object} 参数
     * @param validate {Array} 规则
     *          [
     *              {
     *                  key: 'title',
     *                  type: 'string',
 *                      required: true
     *              }
     *          ]
     * @return {Object}
     */
    validParams: function (params, validate) {
        let valid = { code: 0 }
        for(let i = 0; i < validate.length; i++) {
            const temp = params[validate[i].key]
            if (typeof temp !== validate[i].type) {
                valid = { code: 1, err: `${validate[i].key} is error` }
                break
            }
            if (validate[i].required) {
                if (!temp) {
                    valid = { code: 1, err: `${validate[i].key} is error` }
                    break
                }
            }
        }
        return valid
    }
}
