import React from 'react';

// components
import FullWidthImage from '../../components/FullWidthImage';
import Section from '../../components/Section';
import RegistryCard from '../../components/RegistryCard';
import Row from '../../components/Row';

// images
import bannerImage from '../../images/1.jpg';
import target from '../../images/target.jpg';
import anthropologie from '../../images/anthropologie.png';
import amazon from '../../images/amazon.jpg';

const Registry = () => {
  return (
    <div>
      <FullWidthImage
        src={bannerImage}
        banner
      />
      <Section>
        <Row>
          <RegistryCard
            url="https://www.target.com/gift-registry/giftgiver?registryId=f76014b013f1404994d1282377250466"
            company="Target"
            image={target}
          />
          <RegistryCard
            url="https://www.amazon.com/wedding/morgan-parsons-tyler-brewer-baltimore-december-2017/registry/1JZH2LWLZ1E2Y"
            company="Amazon"
            image={amazon}
          />
          <RegistryCard
            url="https://www.anthropologie.com/registry/listing?registryId=MGU3YJU5YTVH"
            company="Anthropologie"
            image={anthropologie}
          />
        </Row>
      </Section>
    </div>
  )


}

export default Registry;