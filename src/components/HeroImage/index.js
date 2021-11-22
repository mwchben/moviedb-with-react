import React from 'react';

 //import styles
 import { Wrapper, Content, Text } from '../HeroImage/HeroImage.styles';

 const HeroImage = ({ image, title, text /* destructuring the prop with the ES6 syntax */}) => (
     <Wrapper image={image}>
         <Content>
             <Text>
                <h1>{title}</h1>
                <p>{text}</p>
             </Text>
         </Content>
     </Wrapper>
 );

 export default HeroImage;