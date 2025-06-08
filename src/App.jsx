import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PostPage from './pages/PostPage';
import DadosPage from './pages/DadosPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redireciona da rota "/" para "/post" */}
        <Route path="/" element={<Navigate to="/post" />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/dados/:id" element={<DadosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
