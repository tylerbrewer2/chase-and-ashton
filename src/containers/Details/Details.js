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
      <iframe
        height="400"
        frameBorder="0" style={{width: "100%", border: 0}}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.780024649232!2d-83.01201788462404!3d39.946309879422536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388f4367979a8b%3A0xaaede56b5a599e41!2s505%20W%20Whittier%20St%2C%20Columbus%2C%20OH%2043215!5e0!3m2!1sen!2sus!4v1586539581109!5m2!1sen!2sus" allowFullScreen
      />
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