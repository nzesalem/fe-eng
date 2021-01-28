import './DivisionSummary.scss';

import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as EnvelopeIcon } from '../../assets/icons/envelope.svg';
import { ReactComponent as PinIcon } from '../../assets/icons/pin.svg';
import { ReactComponent as NoteBookIcon } from '../../assets/icons/note-book.svg';
import { ReactComponent as FingerprintIcon } from '../../assets/icons/fingerprint.svg';

import SidebarHeader from '../../components/SidebarHeader';

function DivisionSummary() {
  return (
    <div className="division-summary">
      <SidebarHeader icon="castle">
        Division Summary
      </SidebarHeader>
  
      <ul className="info-list">
        <li>
          <PhoneIcon className="sidebar-info-icon" />
          0801 234 5678
        </li>
        <li>
          <EnvelopeIcon className="sidebar-info-icon" />
          asbfefr@gmail.com
        </li>
        <li>
          <PinIcon className="sidebar-info-icon" />
          Mojidi, Lagos
        </li>
        <li>
          <NoteBookIcon className="sidebar-info-icon" />
          <a href="#journals">2 Journal entries</a>
        </li>
        <li>
          <FingerprintIcon className="sidebar-info-icon" />
          24 fingerprints enrolled
        </li>
      </ul>
    </div>
  );
}

export default DivisionSummary;
