import React, { Component } from 'react';
import css from './index.module.scss';
import {connect} from 'react-redux';
import action from './action';
import Swiper from 'swiper'
 class StartHome extends Component {
  render() {
    return (
      <div className="container_fluid">
         <div className={css.head + ' ' +'clear'}>
            <div className={css.head_left}>
                <div className={css.head_left_left}>
                     <div className={"swiper-container" + " " +css.swiper_container }>
                         <div className={"swiper-wrapper"}>
                         {
                         	this.props.headLoops.pc_index_carousel?
                                this.props.headLoops.pc_index_carousel.map(item=><div className={"swiper-slide"+" "+ css.loopList} key={item.hongren_info.uid}>
                                      <img src={item.ad_image} alt =""/>
                                       <div className={css.timeShow}>
                                             <span className={'iconfont' + " icon-atm"}></span>
                                             <span>{this.timeLong.call(this,item.video_length)}</span>
                                             <span>|</span>
                                             <span>{item.hongren_info.user_name}</span>
                                       </div>
                                       <div  className={css.desc}>{item.notify.title}</div>
                                	</div>):null
                         	
                         }
                         </div>
                         <div className={"swiper-pagination"}></div>
                         <div className={"swiper-button-next" +" " +css.arrow +" "+' swiper-button-white'}></div>
                         <div className={"swiper-button-prev" +" " +css.arrow +" " +' swiper-button-white'}></div>
                       </div> 
                 </div>
	            <div className={css.head_right}>

	               {
	               	this.props.headLoops.PCHotTopic?
	               	    this.props.headLoops.PCHotTopic.map(item=> <div className={css.head_top} key={item.hongren_info.uid}>
                                <img src={item.ad_image} alt =""/>
                                 <div className={css.timeShow}>
                                       <span className={'iconfont' + " icon-atm"}></span>
                                       <span>{this.timeLong.call(this,item.video_length)}</span>
                                       <span>|</span>
                                       <span>{item.hongren_info.user_name}</span>
                                 </div>
                                 <div  className={css.desc}>{item.title}</div>
	               	    	 </div>
	               	    	):null
	                
	               }
	                 
	            </div>
            </div>
            <div className={css.head_right}>
               <div className={css.right_icon}>
                  <div className={css.icon}>
                       <img src='/head/logtitle.png'/>
                  </div>
                  <div className={css.btn}><a href="/login">登录</a></div>
               </div>
               <div className={css.right_text}>
                     <a href="/">登录可查看会员权益</a>
                </div>
                <ul className={css.right_list + ' ' + 'clear'}>
                	<li> 
                       <span className={'iconfont' + " icon-atm"}></span>
                       <p>代收货</p>
                	 </li>
            	 	<li> 
            	        <span className={'iconfont' + " icon-atm"}></span>
            	        <p>优惠券</p>
            	 	 </li>
        	 	 	<li> 
        	 	        <span className={'iconfont' + " icon-atm"}></span>
        	 	        <p>我的关注</p>
        	 	 	 </li>
    	 	 	 	<li> 
    	 	 	        <span className={'iconfont' + " icon-atm"}></span>
    	 	 	        <p>代付款</p>
    	 	 	 	 </li>
                	
                </ul>
                <div  className={css.loopText}>
                    <h3>花卷头条</h3>
                    <div className={css.loopContent}>
                    	{/*<li>
                    	   <span></span>
                    	   <a href="#">11111111</a>
                    	</li>*/}
                    	<div className={"swiper-container"+" " + css.titleNew}>
                    	        <div className={"swiper-wrapper"}>
                    	           {
                    	           	this.props.toutiaos.length?
                    	           	   this.props.toutiaos.map(item=><div className={"swiper-slide" +" " + css.swiper} key={item.hongren_uid}>
                                             <span></span>
                                             <a href="#" className={css.a}>{item.content}</a>
                    	           	   	 </div>
                    	           	   	):null
                    	            
                    	           }
                    	        </div>
                    	    </div>
                    </div>
                </div>
            </div>
         </div>
         <div className={css.middle}>
             <h3>
             	人气红人
             	<a href="/more">查看更多</a>
             </h3>
             <div>
                 <div className={"swiper-container" + ' ' + css.swiper}>
                     <div className={"swiper-wrapper" + ' ' + css.list_box}>
                          {
                          	this.props.headLoops.pc_hongren_rec?
                          	   this.props.headLoops.pc_hongren_rec.map(item=><div className={"swiper-slide" + " " + css.list} key={item.hongren_info.uid}>
                                   <img src={item.ad_image} alt=""/>
                                   <div className={css.fensi}>粉丝：<span>{item.hongren_info.fcount}</span></div>
                          	   	</div>):null
                          }                       
                     </div>
                     <div className={"swiper-button-next" +" " +css.arrow1 +" "+' swiper-button-white'}></div>
                     <div className={"swiper-button-prev" +" " +css.arrow2 +" " +' swiper-button-white'}></div>
                 </div>             	
             </div>
         </div>
         <div className={css.footer}>
             <h3>
             	为你推荐
             	<a href="/more">查看更多</a>
             </h3>
               {
               	 this.props.footLoops.length?
               	      <ul className={css.boxList + ' ' + 'clear'}>
               	      {
     	  	      	  	 this.props.footLoops.map((item,index)=><li key={item.goods[0].goods_id} onClick={this.ClickImg.bind(this,item.goods[0].goods_id)} className={css.goodsList}>
     	  	      	  	 	 	<div className={css.imgs}>
     	  	      	              <img src={item.rec_img} alt="" className={css.imgSize} />
     	  	      	  	 	 	</div>
     	  	      	  	 	 	<div className={css.desc}>{item.goods[0].goods_desc}</div>
     	  	      	  	 	 	<div className={css.goodsName}>{item.goods[0].goods_name}</div>
     	  	      	  	 	 	<div className={css.priceBox}>
     	  	      	                <span className={css.price}>{item.goods[0].goods_price}</span>
     	  	      	                <span className={css.marketprice}><b>￥</b>{item.goods[0].goods_marketprice}</span>
     	  	      	  	 	 	 </div>
     	  	      	  	 	 </li>)
               	      }
               	
               	 </ul>:null
              }
         </div>
      </div>
    )
  }
  componentWillMount(){
     this.props.headLoop();
     this.props.footLoop();
     this.props.toutiao();
  }
  componentDidUpdate(){
  	 new Swiper(`.${css.swiper_container}`, {
  	      spaceBetween: 30,
  	      loop:true,
  	      centeredSlides: true,
  	      autoplay: {
  	        delay: 1500,
  	        disableOnInteraction: false,
  	      },
  	      pagination: {
  	        el: '.swiper-pagination',
  	        clickable: true,
  	      },
  	      navigation: {
  	        nextEl: '.swiper-button-next',
  	        prevEl: '.swiper-button-prev',
  	      },
  	    });
  	     new Swiper(`.${css.swiper}`, {
  	       spaceBetween:21,
  	       slidesPerView: 5,
  	       navigation: {
  	         nextEl: '.swiper-button-next',
  	         prevEl: '.swiper-button-prev',
  	       },
  	     });
  	     new Swiper(`.${css.titleNew}`, {
  	             direction: 'vertical',
  	             loop:true,
  	             slidesPerView: 3,
                  speed:1000,
         		     freeMode: true,
  	             autoplay: {
           	        delay:1000,
                    disableOnInteraction: false,
                    waitForTransition: true,
                    stopOnLastSlide: false,
           	      },
                  slidesPerGroup: 1,
                  loop: true,
                  loopFillGroupWithBlank: true,
                  preventInteractionOnTransition : true,
             });
  	
  }
  timeLong(time){
  	var min = Math.floor(time/60);
  	var sec = time%(60)
  	return min+':'+sec
  }
  ClickImg(data){
    this.props.my.push("goods/detail/" + data)
  }
}

export default connect(state=>{
	console.log(state.toutiao)
	return{
		headLoops:state.headLoop,
		footLoops:state.footLoop,
		toutiaos:state.toutiao
	}
},action)(StartHome);