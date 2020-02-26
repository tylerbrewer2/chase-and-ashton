import React from 'react';

import Col from '../Col';
import DescriptionText from '../DescriptionText';
import InitialsSymbol from '../InitialsSymbol';
import Row from '../Row';
import Section from '../Section';

const PersonalInfoCore = () => {
  return (
    <Section>
      <Row>
        <Col tabletWidth={5} mobileWidth={12}>
          <DescriptionText
            header="MORGAN LINDSAY PARSONS"
            subHeader="THE BRIDE"
            align="right"
            mobileAlign="left"
          >
            Morgan is the owner and founder of the (future) $1,000,000+ company Morgan Parsons Creative. She is perfectly content with potatoes for breakfast, lunch and dinner and
            is the 2011 Chick-fil-a Cow of the Year. Morgan is caring and always thinking about others, and I can't wait to get to know her more every day. She's also hilarious and has a firey passion of saying "How bout dah" on a daily basis. <br/>-- Tyler
          </DescriptionText>
        </Col>
        <Col mobileWidth={0} tabletWidth={2}>
          <InitialsSymbol />
        </Col>
        <Col tabletWidth={5} mobileWidth={12}>
          <DescriptionText
            header="TYLER CLARK BREWER"
            subHeader="THE GROOM"
          >
            Most days you’ll find Tyler biking through the streets of Washington D.C., saving the world with code or ferociously chowing down on a Chipotle burrito the size of his head. I think I knew he was the one for me the day he asked me out… with a Chickfila sandwich. ;) #blessed.  In all seriousness, Tyler is passionate, hard working and the kindest person I know and I am excited to do life with him. <br/> -- Morgan
          </DescriptionText>
        </Col>
      </Row>
    </Section>
  )
}

export default PersonalInfoCore;