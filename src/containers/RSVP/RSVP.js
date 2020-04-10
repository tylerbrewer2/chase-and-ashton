import React from 'react';

// Components
import FullWidthImage from '../../components/FullWidthImage';
import RSVPForm from '../../components/RSVPForm';

// Images
import bannerImage from '../../images/4.jpg';

const RSVP = () => {
  return (
    <section>
      <FullWidthImage
        src={bannerImage}
        banner
      />
      <RSVPForm />
    </section>
  );
}

export default RSVP;
