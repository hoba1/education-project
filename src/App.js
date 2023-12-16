import './App.css';
import Homereg from './Pages/Home-reg';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Lectures from './Pages/Lectures';
import Exams from './Pages/Exams';
import Exam from './Pages/Exam';
import { useEffect, useState } from 'react';
import Login from './Pages/Login';
import Signupstudent from './Pages/Signupstudent';
import Signupparent from './Pages/Signupparent';
import Signupadmin from './Pages/Signupadmin';
import Lecture from './Pages/Lecture';
import { CircleLoader } from 'react-spinners';

function App() {
  const [loading , setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 5000);

    document.body.addEventListener("contextmenu" , (e) => {
      e.preventDefault()
    })
  }, [])

  return (
    <div className="App">
      {
        loading? 
        <CircleLoader color={document.documentElement.style.getPropertyValue("--main-color")} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>
        :
        <div className='render'>
          <Routes>
            <Route path={'/'} element={<Homereg />}/>
            <Route path={'/login'} element={<Login />}/>
            <Route path={'/register'} element={<Register />}/>
            <Route path={'/register/signupstudent'} element={<Signupstudent />}/>
            <Route path={'/register/signupparent'} element={<Signupparent />}/>
            <Route path={'/register/signupadmin'} element={<Signupadmin />}/>
            <Route path={'/lectures'} element={<Lectures />}/>
            <Route path={'/lectures/:lectureid'} element={<Lecture />}/>
            <Route path={'/exams'} element={<Exams />}/>
            <Route path={'/exams/:examid'} element={<Exam />}/>
          </Routes>
        </div>
      }
    </div>
  );
}

export default App;
