import styled from 'styled-components';

export const Gallery = styled.ul`
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
`;

export const GalleryItem = styled.li`
  width: calc((100% - 5 * 16px) / 6);
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
