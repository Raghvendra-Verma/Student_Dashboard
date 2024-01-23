import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import CourseDetailsPage from './pages/CourseDetailsPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import './App.css';

function App() {
  return (
    <header className='App-header'>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/courses/:courseId" element={<CourseDetailsPage/>} />
          <Route path="/dashboard" element={<StudentDashboardPage/>} />
        </Routes>
      </Router>
    </Provider>
    </header>
  );
}

export default App;
