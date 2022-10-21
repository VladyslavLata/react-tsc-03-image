import React from 'react';
import { ButtonLoadMore } from "./Button.styled";

interface IProps {
  loadMore: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<IProps> = ({ loadMore, children }) => {
  return (
    <ButtonLoadMore type="button" onClick={loadMore}>
      {children}
    </ButtonLoadMore>
  );
};
