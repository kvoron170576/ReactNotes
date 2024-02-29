import { Link } from 'react-router-dom';
import { MetaWrapper, Title, Wrapper, Text, Button } from './QuizCard.styled';
import { FaBeer } from 'react-icons/fa';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <Wrapper $_level={level}>
      <Link to={`/quizes/${id}`}>
        <Title>{topic}</Title>
      </Link>
      <MetaWrapper>
        <Text color="red">
          <b>Level:</b> {level}
        </Text>
        <Text>
          <b>Time:</b> {time}
        </Text>
        <Text>
          <b>Questions:</b> {questions}
        </Text>
      </MetaWrapper>
      <Button
        onClick={() => {
          onDelete(id);
        }}
      >
        <FaBeer />
      </Button>
    </Wrapper>
  );
};
