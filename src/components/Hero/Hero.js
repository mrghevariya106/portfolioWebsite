import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section roe nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio      
      </SectionTitle>
      <SectionText>
        Coding is powered by people from all over the world who want better connectivity with their Clients and Customers. Python for machine learning, JavaScript for UI/Web design, and Java for backends.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/'}>Learn More...</Button>
    </LeftSection>
  </Section>
);

export default Hero;