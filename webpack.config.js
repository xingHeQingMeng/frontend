const {merge} = require('webpack-merge')
const base = require('./config/base.config')
const dev = require('./config/dev.config')
const prod = require('./config/prod.config')


module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? dev : prod
    return merge(base, config)
}