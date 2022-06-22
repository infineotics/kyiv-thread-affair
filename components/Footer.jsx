export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-primary">
        <div className="footer-primary-inner container">
          <nav className="footer-nav ">
            <ul>
              <li>
                <a href="https://www.google.com" title="Information">
                  Information
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Contact us">
                  Contact us
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Track my order">
                  Track my order
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Shipping">
                  Shipping
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Free returns*">
                  Free returns*
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="My account">
                  My account
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://www.google.com" title="Services">
                  Services
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Ship to store">
                  Ship to store
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Gift card">
                  Gift card
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Online only">
                  Online only
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Tips & tricks">
                  Tips & tricks
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Home">
                  Home
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://www.google.com" title="Careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="About us">
                  About us
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Our story">
                  Our story
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Art & culture">
                  Art & culture
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Our private labels">
                  Our private labels
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Stores">
                  Stores
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://www.google.com" title="Loyalty programs">
                  Loyalty programs
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Sign up to the simons">
                  Sign up to the simons
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="My account">
                  My account
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Conditions">
                  Conditions
                </a>
              </li>
              <li>
                <a href="https://www.google.com" title="Faq">
                  Faq
                </a>
              </li>
            </ul>
          </nav>

          <section className="footer-contact">
            <h1>
              <span>Thread Affair</span> Milano
            </h1>

            <p>
              Largo Augusto 3, Milano, 20122, Milano, IT
              {/* display block pe ancore */}
              <a href="tel:+0039 02 760 003 66" title="Call us">
                Tel: 0039 02 760 003 66
              </a>
              {/* use :nth-of-type(2) */}
              <a
                href="mailto:office@thread-affair.com"
                title="Send us an email"
              >
                office@thread-affair.com
              </a>
            </p>
          </section>

          <section className="footer-support">
            <ul>
              <li>
                <a href="https://fontawesome.com" title="Support">
                  Support
                </a>
              </li>

              <li>
                <a href="https://fontawesome.com" title="Chat">
                  Chat
                </a>
              </li>

              <li>
                <a href="mailto:office@thread-affair.com" title="Email">
                  Email
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="footer-secondary text-center mt-2">
        <p>©2019 THREAD AFFAIR. All Rights Reserved.</p>
        <p>
          Designed by{' '}
          <img
            src="/images/pixellab_logo.jpg"
            alt="PixelLab Logo"
            title="to PixelLab Website"
            className="ms-2"
          ></img>
        </p>
      </section>
    </footer>
  );
}
