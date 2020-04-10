import React from 'react';
import styled from 'styled-components';

// Components
import FullWidthImage from '../../components/FullWidthImage';
import Header from '../../components/Header';
import Section from '../../components/Section';
import BodyText from '../../components/BodyText';

// Images
import bannerImage from '../../images/3.jpg';

const DetailsCore = ({ className }) => {
  return (
    <div className={className}>
      <FullWidthImage
        src={bannerImage}
        banner
      />
      <Section>
        <section className="ceremony">
          <Header>Ceremony</Header>
          <BodyText>Date: June 26th, 2020</BodyText>
          <BodyText>Time: 5:00pm</BodyText>
          <BodyText>Location: Grange Insurance Audubon Center</BodyText>
          <BodyText>Address: 505 W Whittier St, Columbus, OH 43215</BodyText>
        </section>
      </Section>
    </div>
  )
}

const Details = styled(DetailsCore)`
  h1 {
    padding-top: 60px;
  }

  .ceremony h1 {
    padding-top: 0px;
  }
`

export default Details;