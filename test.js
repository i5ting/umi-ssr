
const compiler = require('.')()
// 测试webpack执行情况
compiler.run((err, stats) => {/* ...处理结果 */
if (err) console.dir(err)

  console.dir("sucess")
})
