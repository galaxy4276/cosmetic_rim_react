import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { StyledBanner } from './Styled';
import axios from 'axios';


const MainBanner = () => {
  const [banner] = useState([
    {id : 1, title: 'ㅎㅇ' },
    {id : 2, title: 'ㅎㅇ' },
    {id : 3, title: 'ㅎㅇ' },
  ]);
  
  return (
    <Carousel
      transitionMs={1000}
      showArrows={false}
      enableAutoPlay={true}
      autoPlaySpeed={5000}
    >
      {banner.map(item => <StyledBanner key={item.id}>{item.title}</StyledBanner>)}
    </Carousel>
  );
};

export default MainBanner;