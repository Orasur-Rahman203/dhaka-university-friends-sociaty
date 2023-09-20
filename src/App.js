import './App.css';
import Footer from './Footer';
import Header from './Component/Header';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Message from './pages/Message';
import Gallery from './pages/Gallery';
import MembersList from './pages/MembersListPage';
import SignIn from './Component/User/SignIn'
import SignUp from './Component/User/SignUp'
import AboutPageManu from './pages/AboutPageManu';
import MembersListPage from './pages/MembersListPage';
import Profile from './Component/User/Profile';
import Modals from './Component/User/Modals';
import FriendLocator from './Component/FriendLocator/FriendLocator';
import News from './Component/Footer/News';
import Student from './Component/Footer/Student';
import Events from './Component/Footer/Events';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/aboutPageManu/:id' element={<AboutPageManu/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/membersListPageManu/:id' element={<MembersListPage/>}/>
          <Route path='/friendLocator' element={<FriendLocator/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/' element={<Modals/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
