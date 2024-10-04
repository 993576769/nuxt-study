module.exports = {
  apps: [
    {
      name: 'nuxt',
      exec_mode: 'cluster',
      port: '3000',
      instances: 'max', // 或者设置一个数字
      script: './.output/server/index.mjs'
    }
  ]
}
