import { styled } from 'styled-components';
export const FriendCard = styled.li`
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  min-width: 250px;
  max-width: 350px;
  margin: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  text-align: left;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;
export const Name = styled.p`
  font-size: 32px;
`;
export const Image = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #e4f5f7;
  padding: 10px;
`;
export const Status = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ $_isonline }) => {
    return $_isonline ? 'green' : 'red';
  }};
`;
