import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Deploy from './pages/Deploy';
import Interact from './pages/Interact';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <main className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/deploy" element={<Deploy />} />
              <Route path="/interact" element={<Interact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;