import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';

const  Lazyhomereg = React.lazy(() => import('./Pages/Home-reg'))
const  Lazylogin = React.lazy(() => import('./Pages/Login'))
const  Lazyregister = React.lazy(() => import('./Pages/Register'))
const  LazySignupstudent = React.lazy(() => import('./Pages/Signupstudent'))
const  LazySignupadmin = React.lazy(() => import('./Pages/Signupadmin'))
const  LazySignupparent = React.lazy(() => import('./Pages/Signupparent'))
const  LazyHome = React.lazy(() => import('./Pages/Home'))
const  LazyLectures = React.lazy(() => import('./Pages/Lectures'))
const  LazyLecture = React.lazy(() => import('./Pages/Lecture'))
const  LazyExams = React.lazy(() => import('./Pages/Exams'))
const  LazyExam = React.lazy(() => import('./Pages/Exam'))

function App() {
  const [loadingcolor, setloadingcolor] = useState("#FF9800")

  useEffect(() => {
    document.body.addEventListener("contextmenu" , (e) => {
      // e.preventDefault()
    })

    if(localStorage.getItem("color_option") !== null){
      setloadingcolor(localStorage.getItem("color_option"))
    }
  }, [])
  
  return (
    <div className="App">
        <div className='render'>
          <Routes>
            <Route path={'/'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <Lazyhomereg />
              </React.Suspense>}
            />
            <Route path={'/login'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <Lazylogin />
              </React.Suspense>}
            />
            <Route path={'/register'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <Lazyregister />
              </React.Suspense>}
            />
            <Route path={'/register/signupstudent'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <LazySignupstudent />
              </React.Suspense>}
            />
            <Route path={'/register/signupparent'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <LazySignupparent />
              </React.Suspense>}
            />
            <Route path={'/register/signupadmin'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <LazySignupadmin />
              </React.Suspense>}
            />
            <Route path={'/home'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <LazyHome />
              </React.Suspense>}
            />
            <Route path={'/lectures'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <LazyLectures />
              </React.Suspense>}
            />
            <Route path={'/lectures/:lectureid'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <LazyLecture />
              </React.Suspense>}
            />  
            <Route path={'/exams'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <LazyExams />
              </React.Suspense>}
            />
            <Route path={'/exams/:examid'} element={
              <React.Suspense fallback={<CircleLoader color={loadingcolor} size={150} className='loading-page position-absolute start-50 top-50 translate-middle'/>}>
                <LazyExam />
              </React.Suspense>}
            />
          </Routes>
        </div>
    </div>
  );
}

export default App;
