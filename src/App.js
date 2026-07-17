import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PT from './pages/PT';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import Review from './pages/Review';
import { Index } from './dashbroad/Index';
import ManageStudent from './dashbroad/ManageStudent'
import ManagePost from './dashbroad/ManagePost'
import MyProfile from  './dashbroad/MyProfile'
import ChangePassword from './dashbroad/ChangePassword'
import AcademicSupervisor from './dashbroad/AcademicSupervisor'

import RegisterStudent from './dashbroad/RegisterStudent';
import RegisterSupervisor from './dashbroad/RegisterSupervisor';
import RegisterPost from './dashbroad/RegisterPost';
import { FieldRequest, PtLacation } from './dashbroad/PtLacation';
import { StudentRequest } from './dashbroad/StudentRequest';
import StudentSupervisorList from './dashbroad/SupervisorList';
import { ManagePosts } from './dashbroad/ManagePosts';
import ManageRequest from './dashbroad/ManageRequest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/pt" element={<PT />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/review" element={<Review />} />
        <Route path='/Home' element={<Index/>}></Route>
        <Route path="/managestudent" element={<ManageStudent />} />
        <Route path="/managepost" element={<ManagePost />} />
        <Route path="/registerPost" element={<RegisterPost />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/academicsupervisor" element={<AcademicSupervisor />} />
        {/* <Route path="/industrialsupervisor" element={<IndustrialSupervisor />} /> */}

        <Route path='/ptLocation' element={<PtLacation/>}></Route>

        <Route path='/registerStudent' element={<RegisterStudent/>}></Route>
        <Route path='/registerSupervisor' element={<RegisterSupervisor/>}></Route>
        <Route path='/editStudent/:id' element={<RegisterStudent/>}></Route>
        <Route path='/editPost/:id' element={<RegisterPost/>}></Route>
        <Route path='/editSupervisor/:id' element={<RegisterSupervisor></RegisterSupervisor>}></Route>

        <Route path='/addRequest/:id' element={<FieldRequest/>}></Route>

        
        <Route path='/studentRequest' element={<StudentRequest/>}></Route>
        <Route path='/supervisorList' element={<StudentSupervisorList/>}></Route>

        {/* supervsior */}
        <Route path='/ManagePosts' element={<ManagePosts/>}></Route>
        <Route path='/ManageRequest' element={<ManageRequest/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
