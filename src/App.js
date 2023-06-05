import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgetPass from './pages/ForgetPass';
import Offers from './pages/Offers';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgetPass />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
