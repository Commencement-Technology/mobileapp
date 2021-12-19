import styled from 'styled-components/native';
import { WithTheme } from '../../../types/Generic';

const getColor = ({ theme }: WithTheme) => ({
  color: theme.text,
});

export const H1 = styled.Text`
  font-size: 48px;
  font-weight: bold;
  ${getColor};
`;

export const H3 = styled.Text`
  font-size: 24px;
  font-weight: bold;
  ${getColor};
`;

export const H4 = styled.Text`
  font-size: 20px;
  font-weight: bold;
  ${getColor};
`;

export const Paragraph = styled.Text`
  ${getColor};
`;

export const Overline = styled.Text`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 200;
  ${getColor};
`;

export const Small = styled.Text`
  font-size: 12px;
  ${getColor};
`;

export const Mono = styled.Text`
  font-size: 12px;
  font-family: Menlo-Regular;
  ${getColor};
`;
