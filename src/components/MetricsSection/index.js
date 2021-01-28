import './MetricsSection.scss';

import Container from 'react-bootstrap/Container';

import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';

function App() {
  const metrics = [
    {
      id: 1,
      count: '31454',
      label: 'Ongoing metric',
    },
    {
      id: 2,
      count: '2344',
      label: 'Past metric',
    },
    {
      id: 3,
      count: '14224',
      label: 'Missed metric',
    },
    {
      id: 4,
      count: '635',
      label: 'Failed metric',
    },
    {
      id: 5,
      count: '11334',
      label: 'Pending metric',
    },
  ];
  return (
    <section className="metrics">
      <Container>
        <div className="metrics-wrap">
          {metrics.map((metric) =>
            <div className="metric-card" key={metric.id}>
              <div className="metric-card-header">
                <div className="metric-card-count">{metric.count}</div>
                <InfoIcon className="info-icon" />
              </div>
              <div className="metric-card-label">
                {metric.label}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default App;
