import React from 'react';
import { ResponsiveStyleValue } from '@marigold/system';

import { Box } from '../Box';

export interface InlineProps {
  space?: ResponsiveStyleValue<string>;
  align?: 'top' | 'center' | 'bottom';
}

const ALIGNMENT = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

export const Inline: React.FC<InlineProps> = ({
  space = 'none',
  align = 'center',
  children,
  ...props
}) => (
  <Box
    __baseCSS={{ gap: space, flexWrap: 'wrap' }}
    display="inline-flex"
    alignItems={ALIGNMENT[align]}
    {...props}
  >
    {children}
  </Box>
);
