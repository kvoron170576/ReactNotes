import { styled } from 'styled-components';
export const ProfileCard = styled.div`
  border-radius: 3px;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  max-width: 300px;
  min-width: 250px;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;
export const Description = styled.div`
  padding: 20px;
`;
export const Image = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e4f5f7;
  padding-top: 10px;
`;
export const Name = styled.p`
  font-size: 120%;
  margin: 20px 0 0;
`;
export const Tag = styled.p`
  margin: 10px 0 0;
  color: #999;
  font-size: 90%;
`;
export const Location = styled.p`
  margin: 10px 0 0;
  color: #999;
  font-size: 90%;
`;
export const Stats = styled.ul`
  list-style: none;
  display: flex;
  color: #999;
  font-size: 12px;
  border-top: 1px solid #ccc;
`;
export const StatItem = styled.li`
  padding: 15px;
  border-right: 1px solid #ccc;
  background-color: #e4f5f7;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  flex: 1;
  &:last-of-type {
    border-right: none;
  }
`;
export const Quantity = styled.span`
  color: black;
  font-weight: bold;
  font-size: 14px;
`;
