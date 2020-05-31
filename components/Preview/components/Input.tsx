import React from 'react';
import styled from 'styled-components';
import { Props } from './types';

const Input: React.FC<Props> = ({ children, className }: Props) => {
  const Component = styled.div`
    * {
    }
  `;

  return <Component className={className}>{children}</Component>;
};

export default Input;
