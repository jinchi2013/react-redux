/**
 * Created by 9cjin on 8/8/16.
 */
if (process.env.NODE_ENV === 'production'){
    module.exports = require('./Root.prod')
} else {
    module.exports = require('./Root.dev')
}