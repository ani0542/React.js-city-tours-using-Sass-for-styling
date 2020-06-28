import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from './tourData';
 class TourList extends Component {
     state={
         tours:tourData,
     }
     handleRemove=(id)=>{
         console.log(id)
         const {tours}=this.state;
         const sorted=tours.filter(value=>value.id!==id);
               
         
         this.setState({
             tours:sorted
         })
     }
    render() {
        console.log(this.state.tours)
           const {tours}=this.state;
        return (
            <div>
                   <section className='tourlist'>
                       {
                           tours.map((value,index)=>{
                               return( <Tour key={value.id} value={value} remove={this.handleRemove}/>)
                           })
                       }
                          
                 </section>  
            </div>
        )
    }
}


export default TourList;