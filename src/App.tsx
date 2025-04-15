import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SoundSnooze from './pages/SoundSnooze';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soundsnooze" element={<SoundSnooze />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
