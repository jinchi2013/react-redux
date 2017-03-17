var Backbone = require('libs/backbone');
var RouteConfig = require('./modules/config/route-config');
var Monitor = require('./modules/jcrew/monitor');
var routeConfig = new RouteConfig();
var HeaderView = require('./modules/global/header/views/header-view');
var headerView = new HeaderView();


if(!jcrew.config.isReactFullPage && !jcrew.config.isModule) {
  require('./client/NonReactPages')
} else if(jcrew.config.isReactFullPage) {
  require('./client/')
}

if (!jcrew.config.isModule) {
  var Global = require('./modules/utils/global');
  Global.headerDomReady();
}

if (jcrew.isEmbed) {
  var GlobalCart = require('./modules/global/cart/cart');
  jcrew.GlobalCart = GlobalCart;
}

if (process.env.NODE_ENV !== 'production') {
  require('html!./html/index');
}

Backbone.history.start({
  pushState : true
});

if (module.hot) {
  module.hot.accept();
}