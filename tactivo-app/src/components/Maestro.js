import React from 'react';
import useReveal from '../hooks/useReveal';

function Maestro() {
  const headRef = useReveal();
  const centralRef = useReveal();
  const liteRef = useReveal();
  const flowRef = useReveal();
  const badgesRef = useReveal();

  return (
    <section className="section maestro-section" id="maestro">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow eyebrow--maestro">Tactivo's Control System</span>
          <h2>One system. Two ways to run it.</h2>
          <p>
            Maestro is the software layer behind Tactivo's fuel infrastructure — connecting your
            stations, your controllers, and your data into a single, trusted system. It comes in
            two forms, built for two different jobs.
          </p>
        </div>

        <div className="maestro-cards">
          <div className="maestro-card central reveal" ref={centralRef}>
            <span className="maestro-tag">Maestro Central</span>
            <h3>The Dashboard</h3>
            <p>A web-based dashboard built to manage filling stations — one station or many — from a single screen.</p>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" />
                </svg>
                Web dashboard, accessible from anywhere
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" />
                </svg>
                Central management across multiple filling stations
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20" />
                </svg>
                Unified oversight and reporting
              </li>
            </ul>
          </div>

          <div className="maestro-card lite reveal" ref={liteRef}>
            <span className="maestro-tag">Maestro Lite</span>
            <h3>The Backend Engine</h3>
            <p>A backend system connected directly to the PTS2 controller — the layer that talks to the hardware in real time.</p>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
                </svg>
                Authorised command execution
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" />
                </svg>
                Emergency stop, direct from the fuel nozzle mid-dispense
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 21V9M12 21V3M20 21v-6" />
                </svg>
                Live pump station control &amp; tank levels
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4zM8 9h8M8 13h8M8 17h4" />
                </svg>
                Reporting, fuel price changes &amp; scheduling
              </li>
            </ul>
          </div>
        </div>

        <div className="flow-diagram reveal" ref={flowRef}>
          <div className="flow-node">Your Servers<small>Maestro Central / Lite</small></div>
          <div className="flow-arrow"></div>
          <div className="flow-node flow-node--mid">PTS2 Controller<small>The middleman</small></div>
          <div className="flow-arrow"></div>
          <div className="flow-node">Fuel Pumps &amp; Tanks<small>Physical hardware</small></div>
        </div>
        <div className="protocol-badges reveal" ref={badgesRef}>
          <span>Protocol: <b>HTTP</b> supported</span>
          <span>Protocol: <b>HTTPS</b> supported</span>
        </div>
      </div>
    </section>
  );
}

export default Maestro;
