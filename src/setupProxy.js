<<<<<<< HEAD
const proxy = require('http-proxy-middleware');// vue反向代理

module.exports = function(app) {
  // app.use(proxy('/gateway', { 
  // 	target: 'https://m.maizuo.com',
  // 	host:"m.maizuo.com",
  // 	changeOrigin:true 
  // }));

  
  
};


//axios.get("/api")
=======
const proxy = require('http-proxy-middleware');
module.exports=function(app){
	app.use(proxy('/pc',{
		target:'https://huajuanmall.com',
		host:'huajuanmall.com',
		changeOrigin:true
	}));
	
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
>>>>>>> b3b694d2a572af273ab8545c02d9a88814d523d1
