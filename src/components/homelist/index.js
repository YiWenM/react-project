import React, { Component } from 'react';
import css from './index.module.scss'
class StartHome extends Component {
  render() {
    return (
      <div className="container_fluid">
         <div className={css.head}>
            <div className={css.head_left}>
	            <div className={css.head_right}>
	                 <div className={css.head_top}></div>
	                 <div className={css.head_bottom}></div>
	            </div>
            </div>
            <div></div>
         </div>
      </div>
    );
  }
}

export default StartHome;