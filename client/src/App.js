import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CreateCourse from './pages/CreateCourse/CreateCourse';
import ShowCourseList from './pages/ShowCourseList/ShowCourseList';
import UpdateCourseInfo from './pages/UpdateCourseInfo/UpdateCourseInfo';
import CourseDetails from './pages/CourseDetails/CourseDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowCourseList />} />
          <Route path='/create-course' element={<CreateCourse />} />
          <Route path='/course-details' element={<CourseDetails />} />
          <Route path='/edit-course/:id' element={<UpdateCourseInfo />} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
