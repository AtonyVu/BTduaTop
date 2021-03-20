import React from 'react';

import CardList from './Cardlist';
import Carousel from './carousel';
import Header from './header'
import WWD from './wwd';

function BaiTap2()
{
   return(
      <div>
          <Header/>
          <Carousel/>
          <WWD/>
           <CardList/>
      </div>
   );
}
export default BaiTap2;