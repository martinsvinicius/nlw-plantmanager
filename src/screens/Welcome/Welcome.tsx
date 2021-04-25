import React from 'react';
import { Text } from 'react-native';

// images
import wateringImage from '../../assets/watering.png';
import { Button, Container, Image, Subtitle, Title } from './styles';

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Title>

      <Image source={wateringImage} />

      <Subtitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Subtitle>

      <Button>
        <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Next</Text>
      </Button>
    </Container>
  );
}