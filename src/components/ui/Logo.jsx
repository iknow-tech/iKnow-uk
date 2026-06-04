import { Link } from 'react-router-dom';
import iKnowLogo from '../../assets/logos/iKnow.png';

export default function Logo({ className = '', height = 40 }) {
  return (
    <Link to="/" className={`shrink-0 cursor-pointer group ${className}`}>
      <img
        src={iKnowLogo}
        alt="iKnow Technology"
        style={{ height: `${height}px`, width: 'auto' }}
        className="object-contain"
      />
    </Link>
  );
}
