export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <div className="header-logo">
        <a href="https://www.google.com" title="Thread Affair">
          <img src="/images/logo.jpg" alt="Threat Affair Logo Black"></img>
        </a>
      </div>

      <div className="header-support d-none d-lg-block">
        <ul>
          <li>
            <a href="tel:1-877-666-1840" title="Call us">
              <i className="fa-solid fa-phone-flip"></i>
              Toll Free 1-877-666-1840
            </a>{' '}
            |
          </li>
          <li>
            <a href="mailto:office@traidaffairs.com" title="Send us an email">
              office@traidaffairs.com
            </a>
          </li>
        </ul>
      </div>

      <div className="header-search d-lg-none">
        <ul>
          <li>
            <a href="https://www.google.com" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>
          <li>
            <a href="https://www.google.com" title="Search">
              <i className="fa-solid fa-search"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="header-controls">
        <ul>
          <li>
            <a href="https://www.google.com" title="Card">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="qty">9</span>
            </a>
          </li>

          <li>
            <a href="https://www.google.com" title="My Account">
              <img src="/images/user-avatar.png" alt="My Account"></img>
              <i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
