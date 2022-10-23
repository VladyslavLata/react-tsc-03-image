import React from 'react';
import { MessageInfo } from './Message.styled';
import { IChildren } from '../../types/types';

export const Message: React.FC<IChildren> = ({ children }) => {
  return <MessageInfo>{children}</MessageInfo>;
};
