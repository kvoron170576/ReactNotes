import { styled } from 'styled-components';
export const ImageGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 15px 0;
  li {
    width: calc((100% - 30px) / 4);
    overflow: hidden;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.03);
      cursor: zoom-in;
    }
    img {
      object-fit: cover;
      height: 100%;
    }
  }
`;
