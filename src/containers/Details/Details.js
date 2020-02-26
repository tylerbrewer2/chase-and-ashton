import React from 'react';
import styled from 'styled-components';

// Containers
import ThingsToDo from '../ThingsToDo';

// Components
import FullWidthImage from '../../components/FullWidthImage';
import Header from '../../components/Header';
import Section from '../../components/Section';
import BodyText from '../../components/BodyText';

// Images
import walk from '../../images/ny-walk-75.jpg';

const DetailsCore = ({ className }) => {
  return (
    <div className={className}>
      <FullWidthImage
        src={walk}
        banner
      />
      <Section>
        <section className="ceremony">
          <Header>Ceremony</Header>
          <BodyText>Date: December 2nd, 2017</BodyText>
          <BodyText>Time: 4:30pm</BodyText>
          <BodyText>Location: Accelerator Space</BodyText>
          <BodyText>Address: 417 Benninghaus Rd, Baltimore, MD 21212</BodyText>
        </section>

        <section>
          <Header>Accommodations</Header>
          <BodyText>Attendees can receive a room discount at the <a href="https://www.radisson.com/baltimore-hotel-md-21210/mdbaltim" target="blank">Raddison Hotel - Cross Keys</a> in Baltimore, if you would like the discount please follow these directions:</BodyText>
          <BodyText>
            <ol>
              <li>
                <BodyText>Visit <a href='https://www.radisson.com/baltimore-hotel-md-21210/mdbaltim' target='_blank'>the hotel website</a></BodyText>
              </li>

              <li>
                <BodyText>On the left side, select the days you are checking in and checking out and click <b>More Search Options</b></BodyText>
              </li>


              <li>
                <BodyText>In the promotional code box, enter <b>WEDPB</b></BodyText>
              </li>

              <li>
                <BodyText>Select the hotel (only our group's name should appear) by selecting <b>Book now</b></BodyText>
              </li>

              <li>
                <BodyText>A <b>Room Options</b> screen should appear. Select the bed type that you are requesting, which is located at the bottom of the page</BodyText>
              </li>

              <li>
                <BodyText>Once you select the bed type you are requesting you will be prompted to your reservation profile screen where you can input your contact and payment information</BodyText>
              </li>
            </ol>
            </BodyText>
          </section>

          <ThingsToDo />
      </Section>
      <iframe
        height="400"
        frameBorder="0" style={{width: "100%", border: 0}}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBQoOtcq_iWSSQz438Bjxs8rJ_FdqUY_dw&q=Accelerator+Space,Baltimore+MD" allowFullScreen
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