//import quizItems from '../quiz-items.json';
import user from '../user.json';
import stats from '../data.json';
import friends from '../friends.json';
import { Alert } from './Alert/Alert';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import Counter from './Counter/Counter';
import Toggle from './Toggle/Toggle';
import { Component } from 'react';
import { Shuffle } from './Shuffle/Shuffle';
import { Quiz } from './Quiz/Quiz';
import { FeedBack } from './FeedBack/FeedBack';
import { Phonebook } from './Phonebook/Phonebook';
import { ImageFinder } from './ImageFinder/ImageFinder';
import { Player } from './Player/Player';
import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Quizes } from 'pages/Quizes';
import { CreateQuize } from 'pages/Quizes/CreateQuiz';
import { QuizPage } from 'pages/Quizes/QuizPage';

export class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
              }
            />
            <Route path="quizes" element={<Quizes />}>
              <Route index element={<Quiz />} />
              <Route path="create" element={<CreateQuize />} />
              <Route path=":quizId" element={<QuizPage />} />
            </Route>
            <Route path="phonebook" element={<Phonebook />} />
            <Route path="images-finder" element={<ImageFinder />} />
            <Route path="*" element={<h1>404 - Page not found</h1>} />
          </Route>
        </Routes>
        <GlobalStyle />
        {/*
        <Alert variant="success" elevated>
          ImageFinder
        </Alert>
        <ImageFinder />

        <Alert variant="success" elevated>
          FeedBack
        </Alert>
        <FeedBack />

        <Alert variant="success" elevated>
          Phonebook
        </Alert>
        <Phonebook />
        <Shuffle />

        <Alert variant="success" elevated>
          Counter
        </Alert>
        <Toggle name="Counter">
          <Counter step={5} />
        </Toggle>


        <>
          <Alert variant="info">
            Would you like to browse our recommended products?
          </Alert>
          <Alert variant="error" outlined>
            There was an error during your last transaction
          </Alert>
          <Alert variant="success" elevated>
            Payment received, thank you for your purchase
          </Alert>
          <Alert variant="warning" outlined elevated>
            Please update your profile contact information
          </Alert>
        </>
        <Alert variant="success" elevated>
          Профіль соціальної мережі​
        </Alert>
        <Profile user={user} />
        <Alert variant="success" elevated>
          Секція статистики​
        </Alert>
        <Statistics title="Upload stats" stats={stats} />
        <Statistics stats={stats} />
        <Alert variant="success" elevated>
          Список друзів​
        </Alert>
        <FriendList friends={friends} />
        <Alert variant="success" elevated>
          Історія транзакцій
        </Alert>
        <TransactionHistory items={transactions} /> */}
      </>
    );
  }
}
