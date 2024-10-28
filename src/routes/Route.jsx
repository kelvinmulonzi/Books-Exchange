import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import BookList from '../components/BookList';

const InitialRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />  
                <Route path="/BookList" element={<BookList />} /> 
            </Routes>
        </Router>
    );
}

export default InitialRoutes;