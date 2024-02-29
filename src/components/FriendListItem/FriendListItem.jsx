import { FriendCard, Image, Name, Status } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendCard>
      <Status $_isonline={isOnline}></Status>
      <Image>
        <img src={avatar} alt="User avatar" width="80" />
      </Image>
      <Name>{name}</Name>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
