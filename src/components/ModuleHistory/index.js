import './ModuleHistory.scss';

import SidebarHeader from '../../components/SidebarHeader';

function ModuleHistory() {
  const entries = [
    {
      id: 1,
      title: 'Searched “Journal Entries” on Division module',
      date: '22:10 15/09/2020',
      tag: 'Web',
    },
    {
      id: 2,
      title: 'Searched “Fingerprint record” on Division module',
      date: '22:10 15/09/2020',
      tag: 'Web',
    },
    {
      id: 3,
      title: 'Searched “Journal Entries” on Division module',
      date: '22:10 15/09/2020',
      tag: 'Web',
    },
  ];

  return (
    <div className="module-history">
      <SidebarHeader icon="announcement">
        Module History
      </SidebarHeader>
  
      <ul className="entries-list">
        {entries.map((entry) => 
          <li key={entry.id}>
            <div className="entry-title">{entry.title}</div>
  
            <div className="entry-footer">
              <div className="entry-date">{entry.date}</div>
              <div className="entry-tag">{entry.tag}</div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ModuleHistory;
