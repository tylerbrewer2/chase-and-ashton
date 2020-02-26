import React from 'react';
import styled from 'styled-components';

// Components
import Header from '../../components/Header';
import BodyText from '../../components/BodyText';

const ThingsToDoCore = ({className}) => {
  return (
    <section className={className}>
      <section>
        <Header>Things to do in Washington D.C.</Header>

        <section>
          <Header tag="h2">Sightseeing</Header>
          <BodyText>Museums and monuments and so much more... Our favorite way to see the monuments is at night when they are beautifully lit and parking is easy to find. You have a couple options depending on what you want to see/how much time you have. You can drive to indidual monuments - our favorites are Jefferson, Lincoln, Washington, World War II and FDR Memorials. You can do a walking tour which takes around 3 hours. Park on Ohio Dr. near the Jefferson Memorial. You can visit the monuments in the following order and then walk around the Tidal Basin to return to your car:</BodyText>
          <ol>
            <li><BodyText>Jefferson Memorial</BodyText></li>
            <li><BodyText>Franklin Delano Roosevelt Memorial</BodyText></li>
            <li><BodyText>Korean War Veterans Memorial</BodyText></li>
            <li><BodyText>Lincoln Memorial</BodyText></li>
            <li><BodyText>Vietnam Veterans Memorial</BodyText></li>
            <li><BodyText>Washington Monument</BodyText></li>
            <li><BodyText>World War II Memorial</BodyText></li>
            <li><BodyText>Martin Luther King Memorial</BodyText></li>
          </ol>
        </section>

        <section>
          <Header tag="h2">Shopping and Eating</Header>
          <BodyText>
            Union Market houses great local food, incredible espresso by Peregrine Coffee Co, a variety of pop-up restaurants and Salt & Sundry- a boutique carrying beautiful housewares and gifts. Eastern Market is a great way to spend Saturday morning as local farmers and artists bring their produce.  There are also restaurants where you can grab brunch and many boutique shops for unique gifts.
          </BodyText>
        </section>

        <section>
          <Header tag="h2">Georgetown</Header>
          <BodyText>
            Several blocks of historic buildings, iconic stores and a variety of restaurants overlooking the Potomac River.  Plan to spend a few hours exploring the shops.  Grab a cupcake at Georgetown Cupcake.  Wander down the hill to the waterfront park overlooking the Potomac for a great view of the Kennedy Center.  Malmaison offers a wonderful brunch.
          </BodyText>
        </section>

        <section>
          <Header tag="h2">Ice skating at the National Harbour in Georgetown</Header>
          <BodyText>
            At 11,800 square feet, the Washington Harbour Ice Rink is DC's largest outdoor ice skating venue. Skate alongside the Potomac River and enjoy a hot beverage from one of the rink-side restaurants.
          </BodyText>
        </section>

        <section>
          <Header tag="h2">Coffee Shops</Header>
          <BodyText>
            La Colombe, Blue Bottle Coffee, Compass Coffee, Grace St. Coffee
          </BodyText>
        </section>
      </section>

      <section>
        <Header>Things to do in Baltimore, Maryland</Header>

        <section>
          <Header tag="h2">Christmas Lights</Header>
          <BodyText>Not sure if Christmas lights tickle your fancy, but these are very pretty: <a href="https://www.christmasstreet.com/">www.christmasstreet.com</a></BodyText>
        </section>

        <section>
          <Header tag="h2">Baltimore Aquarium</Header>
          <BodyText>
            Apparently it's amazing, Tyler wants go very badly. Morgan says, "It's nice."
          </BodyText>
        </section>

        <section>
          <Header tag="h2">Fells Point</Header>
          <BodyText>
            Fells Point is a historic maritime neighborhood east of Baltimore's Inner Harbor area that contains the city's densest collection of pubs, bars, and restaurants. It's also on the harbor and hosts a great view.
          </BodyText>
        </section>

        <section>
          <Header tag="h2">Coffee Shops</Header>
          <BodyText>
            Artifact Coffee and Order and Chaos
          </BodyText>
        </section>
      </section>
    </section>
  );
}

const ThingsToDo = styled(ThingsToDoCore)`
  h2 {
    padding-top: 20px;
  }
`

export default ThingsToDo;
