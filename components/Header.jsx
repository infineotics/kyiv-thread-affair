import HeaderPrimry from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

export default function Header() {
  return (
    <header className="header container my-lg-3">
      <HeaderSecondary></HeaderSecondary>

      <HeaderPrimry></HeaderPrimry>
    </header>
  );
}
