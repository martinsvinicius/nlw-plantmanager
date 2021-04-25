import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;

  justify-content: center;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;

  color: ${colors.heading};
  
  margin-top: 38px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: ${colors.heading};

  text-align: center;
  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 56px;
  width: 60px;
  background-color: ${colors.green};
  
  justify-content: center;
  align-items: center;
  
  border-radius: 16px;
  margin-bottom: 12px;
`;


export const Image = styled.Image`
  width: 292px;
  height: 284px;
`;