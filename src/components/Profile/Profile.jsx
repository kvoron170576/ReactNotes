import {
  Description,
  Image,
  Name,
  ProfileCard,
  Stats,
  Tag,
  Location,
  StatItem,
  Quantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Image>
          <img src={avatar} alt="User avatar" />
        </Image>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatItem>
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <span>Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </Stats>
    </ProfileCard>
  );
};
Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
