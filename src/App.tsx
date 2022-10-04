import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/notFound';
import MostrarCertificado from './components/mostrarCertificado';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotFound />} />
          <Route
            path="/certificados/:idCurso/:idCert"
            element={<MostrarCertificado />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
