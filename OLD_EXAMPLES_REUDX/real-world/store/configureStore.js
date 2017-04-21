/**
 * Created by 9cjin on 8/5/16.
 */
if( process.env.NODE_ENV === 'production' ) {
    module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}