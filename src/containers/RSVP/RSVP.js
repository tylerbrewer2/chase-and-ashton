import React from 'react';

// Components
import FullWidthImage from '../../components/FullWidthImage';
import RSVPForm from '../../components/RSVPForm';

// Images
import stairs from '../../images/stairs-75.jpg';

const RSVP = () => {
  return (
    <section>
      <FullWidthImage
        src={stairs}
        banner
      />
      <RSVPForm />
    </section>
  );
}

export default RSVP;
