import React from 'react';
import { SVG } from '@marigold/system';

export const Exclamation = ({ className = '', ...props }) => (
  <SVG className={className} {...props}>
    <path d="M2.25 20.3097H21.75L12 3.46875L2.25 20.3097ZM12.8864 17.2606H11.1136V15.4879H12.8864V17.2606ZM12.8864 13.7151H11.1136V10.1697H12.8864V13.7151Z" />
  </SVG>
);
