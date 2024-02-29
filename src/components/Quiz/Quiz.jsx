import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QizList/QuizList';
import { SearchBar } from './SearchBar';
import { deleteQuzzeByID, fetchQuzzes } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useQueryParams } from 'hooks/useQueryParams';

// const getInitialFilters = () => {
//   const savedFilters = localStorage.getItem('quizFilters');
//   if (savedFilters) {
//     const filters = JSON.parse(savedFilters);
//     if (filters) return filters;
//   }
//   return {
//     topic: '',
//     level: 'all',
//   };
// };
export const Quiz = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { topic, level } = useQueryParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({ topic, level });
  useEffect(() => {
    const controller = new AbortController();
    async function getQuizes(signal = null) {
      try {
        resetRequestData();
        const quizItems = await fetchQuzzes(signal);
        setQuizItems(quizItems);
      } catch (error) {
        console.log(error);
        if (error.code !== 'ERR_CANCELED') setError(true);
      } finally {
        setLoading(false);
      }
    }
    getQuizes(controller.signal);
    return () => {
      controller.abort();
    };
  }, []);
  useEffect(() => {
    let newFilters = {};
    if (filters.topic) newFilters = { ...newFilters, topic: filters.topic };
    if (filters.level) newFilters = { ...newFilters, level: filters.level };
    setSearchParams(newFilters);
  }, [filters, setSearchParams]);
  const visibleItems = useMemo(() => {
    return quizItems.filter(({ topic, level }) => {
      const hasTopic = topic
        .toLowerCase()
        .includes(filters.topic.toLowerCase());
      if (filters.level === 'all') return hasTopic;
      return hasTopic && level === filters.level;
    });
  }, [quizItems, filters]);
  const resetRequestData = () => {
    setLoading(true);
    setError(false);
  };

  const deleteQuiz = async quizId => {
    try {
      resetRequestData();
      const delQuiz = await deleteQuzzeByID(quizId);
      setQuizItems(prevItems =>
        prevItems.filter(({ id }) => id !== delQuiz.id)
      );
      toast.success('Deleted succesfully');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const changelFilters = (value, filter) => {
    setFilters(prevFilters => ({ ...prevFilters, [filter]: value }));
  };
  const resetFilters = () => {
    setFilters(prevFilters => ({
      topic: '',
      level: 'all',
    }));
  };
  return (
    <>
      <h2>Find quiz you want to pass</h2>
      <Toaster />
      {/* <QuizForm onAdd={addQuiz} /> */}
      <SearchBar
        level={filters.level}
        topic={filters.topic}
        onChange={changelFilters}
        onReset={resetFilters}
      />
      {loading && <div>Loading...</div>}
      {error && !loading && <div>OOPS! Error!</div>}
      {visibleItems.length > 0 && (
        <QuizList items={visibleItems} onDelete={deleteQuiz} />
      )}
    </>
  );
};
