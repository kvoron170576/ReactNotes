import { fetchQuzzeByID } from 'api';
import { Alert } from 'components/Alert/Alert';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const QuizPage = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const resetRequestData = () => {
    setLoading(true);
    setError(false);
  };
  useEffect(() => {
    async function getQuiz() {
      try {
        resetRequestData();
        const quizItem = await fetchQuzzeByID(quizId);
        setQuiz(quizItem);
        console.log(quiz);
      } catch (error) {
        console.log(error.message, error.response.data);
        setError({ message: error.message });
      } finally {
        setLoading(false);
      }
    }
    getQuiz();
  }, [quizId]);
  return (
    <div>
      {quiz && (
        <>
          <h2>Quiz Page - {quiz.topic}</h2>
          <p>level: {quiz.level}</p>
          <p>questions: {quiz.questions}</p>
          <p>time: {quiz.time}</p>
        </>
      )}
      {loading && <div>Loading...</div>}
      {error && !loading && (
        <Alert variant="error" outlined>
          {error.message}
        </Alert>
      )}
    </div>
  );
};
