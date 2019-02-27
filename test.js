
const compiler = require('.')({
  'app1':"@/pages/index.tsx"
}, process.cwd())
// 测试webpack执行情况
compiler.run((err, stats) => {/* ...处理结果 */
if (err) console.dir(err)

console.dir(stats)
})
