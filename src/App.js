import { Routes, Route } from 'react-router-dom'

import Simple1Page from './pages/Simple1Page'
import Simple2Page from './pages/Simple2Page'
import OverLoadedPage from './pages/OverLoadedPage'

import IonicSimple1Page from './pages/ionic/Simple1Page'
import IonicSimple2Page from './pages/ionic/Simple2Page'
import IonicOverLoadedPage from './pages/ionic/OverLoadedPage'

import NotFoundPage from './pages/NotFoundPage'
import Layout from "./components/Layout";

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Simple1Page />} />
          <Route path="simple2" element={<Simple2Page />} />
          <Route path="overloaded" element={<OverLoadedPage />} />

          <Route path="ionic/simple1" element={<IonicSimple1Page />} />
          <Route path="ionic/simple2" element={<IonicSimple2Page />} />
          <Route path="ionic/overloaded" element={<IonicOverLoadedPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
