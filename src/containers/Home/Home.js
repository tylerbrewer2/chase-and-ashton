import React from 'react';

// Components
import CountdownSection from '../../components/CountdownSection';
import FullWidthImage from '../../components/FullWidthImage';
import PersonalInfo from '../../components/PersonalInfo';

// Images
import nyc2 from '../../images/nyc-2-75.jpg';
import leaves from '../../images/leaves.svg';

const Home = () => {
  return (
    <div>
      <FullWidthImage
        src={nyc2}
        banner
      />
      <PersonalInfo />
      <CountdownSection backgroundImage={leaves}/>
    </div>
  )
}

export default Home;