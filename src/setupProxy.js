
const proxy = require('http-proxy-middleware');
module.exports=function(app){
	app.use(proxy('/pc',{
		target:'https://www.huajuanmall.com',
		host:'huajuanmall.com',
		changeOrigin:true
	}))
  app.use(proxy('/search',{
    target:'https://www.huajuanmall.com',
    host:'huajuanmall.com',
    changeOrigin:true
  }))
  app.use(proxy('/cart',{
    target:'https://www.huajuanmall.com',
    host:'huajuanmall.com',
    changeOrigin:true
  }))
	
}
//https://www.huajuanmall.com/cart/v2
/*const proxy = require('http-proxy-middleware'); //模块 vue ,react 之所以支持反向代理
        module.exports = function(app) {
          app.use(proxy('/pc', {
                  target: 'https://www.huajuanmall.com',
                  host: 'huajuanmall.com',
                  changeOrigin:true
          }));
        };*/
