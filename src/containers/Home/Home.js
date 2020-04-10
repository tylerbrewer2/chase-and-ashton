import React from 'react';

// Components
import CountdownSection from '../../components/CountdownSection';
import FullWidthImage from '../../components/FullWidthImage';
import PersonalInfo from '../../components/PersonalInfo';

// Images
import bannerImage from '../../images/2.jpg';
import leaves from '../../images/leaves.svg';

const Home = () => {
  return (
    <div>
      <FullWidthImage
        src={bannerImage}
        banner
      />
      <PersonalInfo />
      <CountdownSection backgroundImage={leaves}/>
    </div>
  )
}

export default Home;