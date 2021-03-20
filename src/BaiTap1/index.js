import React from 'react';
import Content from './content'
import Footer from './footer'
import Sidebar from './sidebar'
import Header  from './header'
class BaiTap1 extends React.Component {
     render(){
         return(
             <div>
               <Header/>
               <div className='container'> 
                     <Sidebar/>
               <Content/></div>
            
               <Footer/>
             </div>
         );
     }

}
export default BaiTap1 ;