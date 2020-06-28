import React, { Component } from 'react'
import './Tour.scss'

export default class Tour extends Component {
    state={
        showInfo:false,
    }
    handleInfo=()=>{
        this.setState({
            //! means we will have the opposite value what the current state value is 
            //means or u can say we are fliiping the value here
            showInfo:!this.state.showInfo
        })
    }
    render() {
        const {id,city,img,name,info}=this.props.value;
        const {remove}=this.props;

        return (
            <article className='tour'>
                   <div className='img-container'>
                          <img   src={img} alt='error'/>
                          <span className='close-btn' onClick={()=>{remove(id)}}>
                               <i className='fa fa-window-close'/>
                          </span>
                   </div>
                   <div className='tour-info'>
                        <h3>{city}</h3>
                         <h4>{name}</h4>
                         <h5>
                             info{''}
                             <span onClick={this.handleInfo}>
                                 <i className='fa fa-caret-square-o-down'/>
                            </span>
                        </h5>
                        {this.state.showInfo &&  <p>{info}</p>}
                          
                   </div>
            </article>
        )
    }
}
