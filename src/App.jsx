import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostPage from './pages/PostPage';
import DadosPage from './pages/DadosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<PostPage />} />
        <Route path="/dados/:id" element={<DadosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
