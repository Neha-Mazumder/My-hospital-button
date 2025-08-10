import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppointmentPage from './pages/AppointmentPage';
import AboutPage from './pages/AboutPage';
import ConsultantsPage from './pages/ConsultantsPage';
import RoomBookingPage from './pages/RoomBookingPage';
import MedicalUpdatePage from './pages/MedicalUpdatePage';
import OnlinePharmacyPage from './pages/OnlinePharmacyPage';
import TestReportPage from './pages/TestReportPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/consultants" element={<ConsultantsPage />} />
            <Route path="/room-booking" element={<RoomBookingPage />} />
            <Route path="/medical-update" element={<MedicalUpdatePage />} />
            <Route path="/online-pharmacy" element={<OnlinePharmacyPage />} />
            <Route path="/test-reports" element={<TestReportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
