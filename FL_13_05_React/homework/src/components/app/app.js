import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';
import Header from '../header';
import Footer from '../footer';
import CourseList from '../course-list';
import EditPage from '../edit-page';



function App() {
      
  return (
    <Router>
        <Header />
  
        <Route path='/' render={() => <CourseList />}exact/>
        <Route path='/edit' render={() => <EditPage />} />
    
        <Footer />
    </Router>
    );
  }

export default App;
