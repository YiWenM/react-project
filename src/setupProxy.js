
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
	
}
//https://www.huajuanmall.com/pc/rec/single?cls_id=0&offset=0
/*const proxy = require('http-proxy-middleware'); //模块 vue ,react 之所以支持反向代理
        module.exports = function(app) {
          app.use(proxy('/pc', {
                  target: 'https://www.huajuanmall.com',
                  host: 'huajuanmall.com',
                  changeOrigin:true
          }));
        };*/
<<<<<<< HEAD

=======
>>>>>>> 18b791831550077540d7613d1095eaff86674113
