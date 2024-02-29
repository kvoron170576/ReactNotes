import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QizList/QuizList';
import { SearchBar } from './SearchBar';
import { addQuizze, deleteQuzzeByID, fetchQuzzes } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import { Component } from 'react';
export class Quiz extends Component {
  state = {
    quizItems: [],
    loading: false,
    error: false,
    filters: {
      topic: '',
      level: 'all',
    },
    newId: 100,
  };
  resetRequestData = () => {
    this.setState({ loading: true, error: false });
  };
  async componentDidMount() {
    const savedFilters = localStorage.getItem('quizFilters');
    if (savedFilters) {
      const filters = JSON.parse(savedFilters);
      if (filters) {
        this.setState({ filters });
      }
    }
    try {
      this.resetRequestData();
      const quizItems = await fetchQuzzes();
      this.setState({ quizItems });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem('quizFilters', JSON.stringify(this.state.filters));
    }
  }
  deleteQuiz = async quizId => {
    try {
      this.resetRequestData();
      const delQuiz = await deleteQuzzeByID(quizId);
      this.setState(state => ({
        quizItems: state.quizItems.filter(({ id }) => id !== delQuiz.id),
      }));
      toast.success('Deleted succesfully');
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };
  addQuiz = async newQuiz => {
    try {
      this.resetRequestData();
      const addedQuiz = await addQuizze(newQuiz);
      this.setState(state => ({
        quizItems: [...state.quizItems, addedQuiz],
        newId: (state.newId += 1),
      }));
      toast.success('Added succesfully');
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };
  changeLevelFilter = newLevel => {
    this.setState(state => ({
      filters: { ...state.filters, level: newLevel },
    }));
  };
  changeTopicFilter = newTopic => {
    this.setState(state => ({
      filters: { ...state.filters, topic: newTopic },
    }));
  };
  getVisibleQizItems = () => {
    const { quizItems, filters } = this.state;
    return quizItems.filter(({ topic, level }) => {
      const hasTopic = topic
        .toLowerCase()
        .includes(filters.topic.toLowerCase());
      if (filters.level === 'all') return hasTopic;
      return hasTopic && level === filters.level;
    });
  };
  render() {
    const { filters, loading, error } = this.state;
    const visibleItems = this.getVisibleQizItems();
    return (
      <>
        <Toaster />
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar
          level={filters.level}
          topic={filters.topic}
          onChangeLevel={this.changeLevelFilter}
          onChangeTopic={this.changeTopicFilter}
        />
        {loading && <div>Loading...</div>}
        {error && !loading && <div>OOPS! Error!</div>}
        {visibleItems.length > 0 && (
          <QuizList items={visibleItems} onDelete={this.deleteQuiz} />
        )}
      </>
    );
  }
}
