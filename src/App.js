import './App.scss';

import Container from 'react-bootstrap/Container';

import MetricsSection from './components/MetricsSection';
import Navbar from './components/Navbar';
import DivisionSummary from './components/DivisionSummary';
import ModuleHistory from './components/ModuleHistory';
import UsersTable from './components/UsersTable';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="custom-breadcrumb">
        <Container>
          <ul className="breadcrumb-list">
            <li><a href="#divisions">Divisions</a></li>
            <li><a href="#modules">Modules</a></li>
          </ul>
        </Container>
      </div>

      <MetricsSection />

      <section className="main-section">
        <Container>
          <div className="main-row">
            <div className="sidebar">
              <DivisionSummary />
            
              <ModuleHistory />
            </div>

            <div className="main">
              <UsersTable />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default App;
