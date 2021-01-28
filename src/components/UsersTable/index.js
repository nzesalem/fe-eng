import React, { useState } from 'react';

import './UsersTable.scss';

import { Table, Form } from 'react-bootstrap';

import Icon from '../../components/Icon';
import RiskLevel from '../../components/RiskLevel';
import TableMenu from '../../components/TableMenu';

function UsersTable() {
  const tableEntries = [
    {
      id: 1,
      name: 'Courtney Henry',
      state: 'Lagos state',
      address: '775 Rolling Green Rd.',
      issueCount: 0,
      entryCount: 19,
      tag: 'Homogenous',
      risk: 'low',
    },
    {
      id: 2,
      name: 'Darrel Steward',
      state: 'Lagos state',
      address: '7529 E. Pecan St.',
      issueCount: 2,
      entryCount: 10,
      tag: 'Homogenous',
      risk: 'mid',
    },
    {
      id: 3,
      name: 'Cody Fisher',
      state: 'Lagos state',
      address: '3605 Parker Rd.',
      issueCount: 0,
      entryCount: 8,
      tag: 'Homogenous',
      risk: 'mid',
    },
    {
      id: 4,
      name: 'Bassie Cooper',
      state: 'Lagos state',
      address: '775 Rolling Green Rd.',
      issueCount: 1,
      entryCount: 12,
      tag: 'Homogenous',
      risk: 'high',
    },
    {
      id: 5,
      name: 'Annette Black',
      state: 'Lagos state',
      address: '8080 Railroad St.',
      issueCount: 0,
      entryCount: 13,
      tag: 'Homogenous',
      risk: 'low',
    },
    {
      id: 6,
      name: 'Jenny Wilson',
      state: 'Lagos state',
      address: '8080 Railroad St.',
      issueCount: 5,
      entryCount: 18,
      tag: 'Homogenous',
      risk: 'high',
    },
    {
      id: 7,
      name: 'Darlene Robertson',
      state: 'Lagos state',
      address: '3890 Poplar Dr.',
      issueCount: 2,
      entryCount: 6,
      tag: 'Homogenous',
      risk: 'mid',
    },
    {
      id: 8,
      name: 'Ralph Edwards',
      state: 'Lagos state',
      address: '8558 Green Rd.',
      issueCount: 0,
      entryCount: 14,
      tag: 'Homogenous',
      risk: 'low',
    },
  ];

  const [selected, setSelected] = useState([]);

  function selectAll(e) {
    if (e.target.checked) {
      setSelected(tableEntries.map((entry) => entry.id))
    } else {
      setSelected([])
    }
  }

  function selectEntry(entryId, e) {
    if (e.target.checked) {
      setSelected([...selected, entryId])
    } else {
      const index = selected.findIndex(id => id === entryId);
      if (index !== -1) {
        setSelected([
          ...selected.slice(0, index),
          ...selected.slice(index + 1),
        ])
      }
    }
  }

  return (
    <div className="users-table">
      <Table responsive>
          <thead>
            <tr>
              <th className="check-col">
                <Form.Check
                  id="check-all"
                  custom
                  checked={selected.length === tableEntries.length}
                  onChange={selectAll}
                />
              </th>
              <th></th>
              <th>Name</th>
              <th>Location</th>
              <th>Status</th>
              <th>Entries</th>
              <th>Risk Profile</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableEntries.map((entry, index) => (
              <tr key={entry.id}>
                <td className="check-col">
                  <Form.Check
                    id={`check-${index+1}`}
                    checked={selected.includes(entry.id)}
                    custom
                    onChange={selectEntry.bind(null, entry.id)}
                  />
                </td>
                <td className="chevron-col">
                  <Icon name="chevron-down-circle" />
                </td>
                <td className="name-col">{entry.name}</td>
                <td className="state-address-col">
                  <div className="table-entry-state">{entry.state}</div>
                  <div className="table-entry-address">{entry.address}</div>
                </td>
                <td className="issue-col">
                  {entry.issueCount > 0 ? (
                    <div className="issues-label some-issues">
                      {entry.issueCount} Issue{entry.issueCount > 1 ? 's' : ''} found
                    </div>
                  ) : (
                    <div className="issues-label no-issues">
                      No issues
                    </div>
                  )}
                </td>
                <td className="unique-entry-col">
                  <div className="table-unique-entry">{entry.entryCount} Unique Entries</div>
                  <div className="table-entry-tag">{entry.tag}</div>
                </td>
                <td className="risk-col">
                  <RiskLevel risk={entry.risk} />
                </td>
                <td className="menu-col">
                  <TableMenu />
                </td>
              </tr>
            ))}
          </tbody>
      </Table>
    </div>
  );
}

export default UsersTable;
