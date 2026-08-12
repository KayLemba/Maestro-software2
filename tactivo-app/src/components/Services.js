import React from 'react';
import useReveal from '../hooks/useReveal';
import maestroSoftware from '../assets/maestro-software.jpeg';
import maestroCentral from '../assets/maestro-central.jpeg';
import maestroTaxi from '../assets/maestro-taxi.jpeg';
import maestroOtp from '../assets/maestro-otp.jpeg';

const CORE_SERVICES = [
  {
    title: 'Forecourt Solutions',
    desc: 'Everything for your forecourt — from fuel tanks and dispensers to automation — delivered as one seamless system built to maximise profit and uptime.',
    tags: ['Design', 'Installation', 'Compliance'],
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M3 21h12M6 21V8l5-5 5 5v13M9 21v-6h4v6" />
      </svg>
    ),
  },
  {
    title: 'IT Solutions',
    desc: 'Total control over your business, with trusted solutions in surveillance, networking, and solar energy that keep your operation always on.',
    tags: ['Surveillance', 'LAN/WAN', 'Software Dev', 'Intercom', 'Solar'],
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: 'Fuel Tank / UST / AST',
    desc: 'Built to last, our underground and aboveground storage tanks provide a safe, reliable foundation for your fuel operations — securely stored and fully compliant.',
    tags: ['UST', 'AST', 'Leak Protection'],
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="4" y="6" width="16" height="14" rx="2" /><path d="M8 6V4h8v2" />
      </svg>
    ),
  },
  {
    title: 'Fuel Dispensers',
    desc: 'Maximise every transaction with high-flow dispensers built for speed and reliability — engineered for zero downtime and more throughput at the pump.',
    tags: ['High-Flow', 'Multi-Product'],
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M6 21V5a2 2 0 0 1 2-2h5v18M13 8h3a2 2 0 0 1 2 2v3.5a1.5 1.5 0 0 0 3 0V8l-3-3" />
      </svg>
    ),
  },
  {
    title: 'Fuel Automation',
    desc: 'Total control over your fuel, drop by drop. Intelligent automation tracks every litre, eliminates waste, and cuts operating costs.',
    tags: ['Real-Time Tracking', 'Loss Prevention'],
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: 'Surveillance & Access Control',
    desc: 'See every corner of your site and control exactly who gets in. CCTV coverage and access control systems built for round-the-clock protection.',
    tags: ['CCTV Cameras', 'Access Control', 'Remote Monitoring'],
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="2.5" y="7" width="12" height="9" rx="1.5" />
        <path d="M14.5 10 20.5 7v9l-6-3Z" strokeLinejoin="round" />
        <circle cx="8.5" cy="11.5" r="2" />
      </svg>
    ),
  },
];

const PRODUCTS = [
  {
    name: 'Maestro Software',
    desc: 'The core software platform powering Tactivo\'s fuel and forecourt systems.',
    img: maestroSoftware,
  },
  {
    name: 'Maestro Central',
    desc: 'Web dashboard for managing one or many filling stations from a single screen.',
    img: maestroCentral,
  },
  {
    name: 'Maestro Taxi Metering',
    desc: 'Fare metering built for taxi and fleet operators, integrated with the Maestro platform.',
    img: maestroTaxi,
  },
  {
    name: 'Maestro OTP',
    desc: 'One-time-password authentication for secure access and transaction verification.',
    img: maestroOtp,
  },
];

function Services() {
  const headRef = useReveal();
  const stripRef = useReveal();
  const subheadRef = useReveal();

  return (
    <section className="section section--flush-top" id="services">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Our Services</span>
          <h2>Integrated solutions, unmatched reliability.</h2>
          <p>From the ground beneath the forecourt to the network that secures it, every service is built on the same foundation of precision engineering.</p>
        </div>

        <div className="capability-strip reveal" ref={stripRef}>
          <div className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1698752822107-69f8973936e4?auto=format&fit=crop&w=200&q=70"
              alt="Solar panel array"
            />
            <span>Solar</span>
          </div>
          <div className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=70"
              alt="Network cabling and switches"
            />
            <span>Network</span>
          </div>
          <div className="capability-item">
            <svg viewBox="0 0 64 64" className="cap-illustration"><path d="M10 24 L54 24 L48 14 L16 14 Z" strokeWidth="2" strokeLinejoin="round" fill="none" /><line x1="18" y1="24" x2="18" y2="46" strokeWidth="2" /><line x1="46" y1="24" x2="46" y2="46" strokeWidth="2" /><rect x="28" y="30" width="8" height="18" rx="1" strokeWidth="2" /></svg>
            <span>Forecourt</span>
          </div>
          <div className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/31/khLPhykbRGiQmBGR4V6K__DSC1730.jpg?auto=format&fit=crop&w=200&q=70"
              alt="Industrial fuel storage tanks"
            />
            <span>Storage</span>
          </div>
          <div className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1529265895721-65945a176cff?auto=format&fit=crop&w=200&q=70"
              alt="CCTV security cameras"
            />
            <span>Security</span>
          </div>
        </div>

        <div className="services-grid">
          {CORE_SERVICES.map((s) => (
            <div className="service-card reveal in" key={s.title}>
              <div className="icon-badge">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="services-subhead reveal" ref={subheadRef}>
          <h3>The Maestro Product Suite</h3>
          <p>Tactivo's own software products, built to run alongside the hardware.</p>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <div className="product-card reveal in" key={p.name}>
              <div className="product-logo-frame">
                <img src={p.img} alt={`${p.name} logo`} />
              </div>
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
