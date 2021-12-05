import React from 'react';
import * as S from './AutoDiscoverCard.styled';
import { ValidValidatedInstance } from '../../../screens/login/AutoDiscover';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { useWindowDimensions, View } from 'react-native';

export interface AutoDiscoverCardProps {
  /** Description of children. */
  device: ValidValidatedInstance;
  /** onPress Handler */
  onPress: (device: ValidValidatedInstance) => void;
}

/**
 * Description of AutoDiscoverCard.
 */
export function AutoDiscoverCard({ device, onPress }: AutoDiscoverCardProps): JSX.Element {
  const { width } = useWindowDimensions();

  return (
    <S.AutoDiscoverCard onPress={() => onPress(device)} width={width}>
      <View>
        <Typography variant={TypographyVariants.H3}>{device.name}</Typography>
        {device.description && <Typography variant={TypographyVariants.Paragraph}>{device.description}</Typography>}
        <S.HostnameText variant={TypographyVariants.Paragraph}>Found at {device.ssh.hostname}</S.HostnameText>
      </View>
      <View />
    </S.AutoDiscoverCard>
  );
}