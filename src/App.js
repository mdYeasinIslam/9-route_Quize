import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Statistics from './pages/Statistics';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
