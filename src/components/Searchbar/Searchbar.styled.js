import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SearcPanel = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: ${p => p.theme.space[9]}px ${p => p.theme.space[10]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgPrimary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
`;

export const ButtonForm = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: ${p => p.theme.borders.none};
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.none};
  outline: none;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
`;

export const MessageFormError = styled(ErrorMessage)`
  position: absolute;
  bottom: 2px;
  right: 50%;
  transform: translateX(50%);
  font-size: ${p => p.theme.fontSizes.s};
  ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.red};
`;
