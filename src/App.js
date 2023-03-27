import './App.css';
import { Main } from './components/Main';
import { CommentsPost } from './components/CommentsPost';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<CommentsPost />} />
      </Routes>
    </> 
  );
}

export default App;
