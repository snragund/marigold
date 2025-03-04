import React from 'react';
import { Box, Inline, Stack } from '@marigold/components';
import type { Meta } from '@storybook/react';

import * as Token from '.';

export default {
  title: 'Token',
} as Meta;

export const Colors = () => {
  const Color = ({ value }: { value: string }) => (
    <Box css={{ height: 50, width: 120, bg: value }} />
  );

  const List = ({ color }: { color: { [name: string]: string } }) => (
    <Inline>
      {Object.values(color).map(value => (
        <Color key={value} value={value} />
      ))}
    </Inline>
  );

  const { brand, ...colors } = Token.color;
  return (
    <Stack space="12px">
      <List color={brand} />
      {Object.keys(colors).map(name => (
        <List key={name} color={(Token.color as any)[name]} />
      ))}
    </Stack>
  );
};
