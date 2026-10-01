import { useState } from "react"

type IconName = "arrow" | "phone" | "menu" | "close" | "mail" | "down-arrow"

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    "down-arrow": (
      <>
        <path d="M12 5v14" />
        <path d="m6 13 6 6 6-6" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z" />
    ),
    menu: (
      <>
        <path d="M4 8h16" />
        <path d="M4 16h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  )
}

/* ==========================================================================
   01 — HEADER
   Orientation + navigation.
   SRS LOGO Equipment Services Spares Solutions About 044 4316 8330 [ Request a Quote ]
   ========================================================================== */
function Header() {
  const [open, setOpen] = useState(false)
  const navLinks = [
    { label: "Equipment", href: "#equipment" },
    { label: "Services", href: "#service-spares" },
    { label: "Spares", href: "#spares-anchor" },
    { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#who-is-srs" },
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="SRS Material Handling home">
          <img
            className="brand-logo"
            src="/images/srs-logo.png"
            alt="SRS Material Handling India Pvt Ltd"
          />
        </a>

        <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Primary navigation">
          {navLinks.map((item) => (
            <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-phone-mobile"
            href="tel:+914443168330"
            onClick={() => setOpen(false)}
          >
            <Icon name="phone" />
            044-43168330
          </a>
        </nav>

        <div className="header-actions">
          <a className="header-tel" href="tel:+914443168330">
            044-43168330
          </a>
          <a className="button button--small" href="#contact">
            Request a Quote
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  )
}

/* ==========================================================================
   02 — HERO — WHAT SRS DOES
   Hierarchy:
   MATERIAL HANDLING
   Equipment, Service & Spare Parts for Material Handling.
   SRS supports industrial operations with forklifts, maintenance, spare parts and specialized material-handling solutions.
   Since 2006 · Chennai
   CTA: Request a Quote | Explore Our Capabilities ↓
   Large real SRS equipment photograph.
   ========================================================================== */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">MATERIAL HANDLING</p>
          <h1 className="hero-title">
            Equipment, Service &amp; Spare Parts for Material Handling.
          </h1>
          <p className="hero-lead">
            SRS supports industrial operations with forklifts, maintenance, spare parts
            and specialized material-handling solutions.
          </p>

          <p className="hero-meta">Since 2006 · Chennai</p>

          <div className="hero-actions">
            <a className="button hero-btn-primary" href="#contact">
              Request a Quote <Icon name="arrow" />
            </a>
            <a className="hero-link-secondary" href="#what-we-provide">
              Explore Our Capabilities ↓
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/forklift-hero.jpg"
            alt="Real SRS industrial forklift in operation"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   03 — TRUST / CLIENTS
   Immediately after the hero:
   Trusted by Industry
   Caterpillar | Brakes India Limited | KONE
   ========================================================================== */
function TrustClients() {
  return (
    <section className="client-proof-section">
      <div className="client-proof-container">
        <p className="client-proof-eyebrow">Trusted by Industry</p>
        <div className="client-logos-row">
          <div className="client-logo-item" title="Komatsu">
            <img src="/logo/komatsu-logo.jpg" alt="Komatsu" />
          </div>
          <div className="client-logo-item" title="KONE">
            <img src="/logo/kone-logo.png" alt="KONE" />
          </div>
          <div className="client-logo-item" title="MRF">
            <img src="/logo/mrf-logo.png" alt="MRF" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   04 — WHO IS SRS?
   Company story + simple visual timeline:
   Built From Service.
   SRS began in 2006 as a forklift service and genuine spare-parts business...
   Timeline: 2006 -> 2016 -> TODAY
   ========================================================================== */
function WhoIsSRS() {
  return (
    <section className="section who-srs-section" id="who-is-srs">
      <div className="who-srs-inner">
        <div className="who-srs-story">
          <p className="section-label">WHO IS SRS?</p>
          <h2>Built From Service.</h2>
          <p className="who-srs-lead">
            SRS began in 2006 as a forklift service and genuine spare-parts business. The
            company has since expanded into equipment, service, spare parts and
            specialized material-handling solutions.
          </p>
          <p className="who-srs-location">
            Operating from Thirumudivakkam, Chennai — adjacent to SIDCO Industrial Estate.
          </p>
        </div>

        <div className="who-srs-timeline-wrap">
          <div className="timeline-step">
            <span className="timeline-step-badge">2006</span>
            <strong>Started as forklift service &amp; spares</strong>
            <p>Technical service and genuine spare parts for multi-brand industrial forklifts.</p>
          </div>

          <div className="timeline-step">
            <span className="timeline-step-badge">2016</span>
            <strong>Company incorporated</strong>
            <p>Formalized as Sri Ram Forklift &amp; Equipments Pvt Ltd to expand fleet and client capacity.</p>
          </div>

          <div className="timeline-step">
            <span className="timeline-step-badge">TODAY</span>
            <strong>Equipment · Service · Spares · Solutions</strong>
            <p>A comprehensive material-handling partner with in-house fabrication and multi-brand spares.</p>
          </div>
        </div>
      </div>
    </section>
  )
}



/* ==========================================================================
   06 — WHAT WE DO (Editorial Capability Section)
   Concept: Everything Around Material Handling.
   Asymmetric visual areas: Hero Equipment (58%) + Human Service (42%),
   Technical Spares (45%) + Solutions Collage (55%).
   ========================================================================== */
function WhatWeProvide() {
  return (
    <section className="section what-we-do-editorial" id="what-we-provide">
      <div className="wwd-header">
        <p className="section-label">WHAT WE DO</p>
        <h2>Everything Around<br />Material Handling.</h2>
        <p className="wwd-subcopy">
          From equipment and technical service to spare parts and specialized solutions,
          SRS supports the requirements that keep industrial operations moving.
        </p>
      </div>

      <div className="wwd-layout">
        {/* ROW 1: Dominant Equipment (58%) + Human Service (42%) */}
        <div className="wwd-row wwd-row--top">
          {/* 01 — EQUIPMENT (Hero Dominant Item) */}
          <a className="wwd-card wwd-card--equipment" href="#equipment">
            <div className="wwd-card-visual">
              <img
                src="/images/forklift-warehouse.jpg"
                alt="SRS industrial forklift in active warehouse operation"
                loading="lazy"
              />
              <span className="wwd-badge">01 · EQUIPMENT</span>
            </div>
            <div className="wwd-card-content">
              <div className="wwd-card-header-row">
                <span className="wwd-num">01</span>
                <h3>EQUIPMENT</h3>
              </div>
              <span className="wwd-action">
                Explore Equipment <Icon name="arrow" />
              </span>
            </div>
          </a>

          {/* 02 — SERVICE (Technician & Workshop) */}
          <a className="wwd-card wwd-card--service" href="#service-spares">
            <div className="wwd-card-visual">
              <img
                src="/images/srs-service.png"
                alt="SRS technician performing forklift service and maintenance"
                loading="lazy"
              />
              <span className="wwd-badge">02 · SERVICE</span>
            </div>
            <div className="wwd-card-content">
              <div className="wwd-card-header-row">
                <span className="wwd-num">02</span>
                <h3>SERVICE</h3>
              </div>
              <span className="wwd-action">
                Discuss a Requirement <Icon name="arrow" />
              </span>
            </div>
          </a>
        </div>

        {/* ROW 2: Technical Spares (45%) + Solutions Collage (55%) */}
        <div className="wwd-row wwd-row--bottom">
          {/* 03 — SPARES (Technical Parts Detail) */}
          <a className="wwd-card wwd-card--spares" href="#spares-anchor">
            <div className="wwd-card-visual">
              <img
                src="/images/spares.jpg"
                alt="SRS genuine forklift spare parts, mechanical and hydraulic components"
                loading="lazy"
              />
              <span className="wwd-badge">03 · SPARES</span>
            </div>
            <div className="wwd-card-content">
              <div className="wwd-card-header-row">
                <span className="wwd-num">03</span>
                <h3>SPARES</h3>
              </div>
              <span className="wwd-action">
                Find a Part <Icon name="arrow" />
              </span>
            </div>
          </a>

          {/* 04 — SPECIALIZED SOLUTIONS (Image Collage) */}
          <a className="wwd-card wwd-card--solutions" href="#solutions">
            <div className="wwd-card-visual wwd-card-visual--collage">
              <div className="wwd-collage-stage">
                <div className="wwd-collage-item">
                  <img
                    src="/images/srs-goods-lift.png"
                    alt="SRS Goods Lift"
                    loading="lazy"
                  />
                  <span>Goods Lifts</span>
                </div>
                <div className="wwd-collage-item">
                  <img
                    src="/images/srs-wheels.png"
                    alt="SRS PU / Vulkollan Wheel"
                    loading="lazy"
                  />
                  <span>PU / Vulkollan Wheels</span>
                </div>
                <div className="wwd-collage-item">
                  <img
                    src="/images/srs-dock-leveler.png"
                    alt="SRS Dock Leveler"
                    loading="lazy"
                  />
                  <span>Dock Levelers</span>
                </div>
              </div>
              <span className="wwd-badge">04 · SPECIALIZED SOLUTIONS</span>
            </div>
            <div className="wwd-card-content">
              <div className="wwd-card-header-row">
                <span className="wwd-num">04</span>
                <h3>SPECIALIZED SOLUTIONS</h3>
              </div>
              <span className="wwd-action">
                Explore Solutions <Icon name="arrow" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   07 — EQUIPMENT
   Equipment We Supply & Support
   Large real forklift image.
   Categories: Forklifts (Diesel · Battery · Gas) | Warehouse Equipment
   Enquire About Equipment →
   ========================================================================== */
function Equipment() {
  return (
    <section className="section equipment-section" id="equipment">
      <div className="equipment-header">
        <p className="section-label">EQUIPMENT</p>
        <h2>Equipment We Supply &amp; Support</h2>
      </div>

      <div className="equipment-split">
        <div className="equipment-photo">
          <img
            src="/folklift-images/10.jpg"
            alt="SRS heavy-duty industrial forklift supplied with verified branding"
            loading="lazy"
          />
        </div>

        <div className="equipment-info">
          <div className="equipment-category-block">
            <p className="equipment-category-title">Forklifts</p>
            <p className="equipment-category-items">Diesel · Battery · Gas</p>
          </div>

          <div className="equipment-category-block">
            <p className="equipment-category-title">Warehouse Equipment</p>
            <p className="equipment-category-items">
              Reach Trucks · Stackers · BOPT · Hand Pallet Trucks
            </p>
          </div>

          <p className="equipment-body">
            Supplying dependable material handling units backed from day one by our in-house
            service engineers and genuine spare-parts stock.
          </p>

          <a className="button" href="#contact">
            Enquire About Equipment <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   08 — SERVICE + SPARES
   Two connected capabilities:
   SERVICE: Keep the Equipment Working. Technician/workshop photo.
   SPARES: The Part You Need. When You Need It. Spare-parts photo. Categories + Part enquiry prompt.
   ========================================================================== */
function ServiceAndSpares() {
  return (
    <section className="service-spares-container" id="service-spares">
      {/* SERVICE HALF (Dark background) */}
      <div className="service-subblock">
        <div className="service-subblock-inner">
          <div className="service-photo-wrap">
            <img
              src="/images/srs-service.png"
              alt="SRS technician performing technical service overhaul"
              loading="lazy"
            />
          </div>

          <div className="service-details">
            <p className="section-label section-label--light">SERVICE</p>
            <h2>Keep the Equipment Working.</h2>
            <p className="service-tagline">
              Prompt, reliable service support engineered to prevent downtime and restore
              machines quickly across Chennai and Tamil Nadu industrial clusters.
            </p>

            <div className="service-items-grid">
              <div className="service-item-cell">
                <strong>Preventive Maintenance</strong>
                <p>Routine checks, oil and filter replacements to prevent early wear.</p>
              </div>
              <div className="service-item-cell">
                <strong>Breakdown Support</strong>
                <p>Rapid response teams dispatched for on-site troubleshooting.</p>
              </div>
              <div className="service-item-cell">
                <strong>Repairs</strong>
                <p>Mechanical, hydraulic, and structural overhauls in our workshop.</p>
              </div>
              <div className="service-item-cell">
                <strong>Technical Service</strong>
                <p>Electrical diagnostic support and multi-brand controller repairs.</p>
              </div>
            </div>

            <p className="service-covered-strip">
              Engine · Transmission · Mast · Hydraulics · Electrical
            </p>

            <a className="button" href="#contact">
              Discuss a Service Requirement →
            </a>
          </div>
        </div>
      </div>

      {/* SPARES HALF (Light background) */}
      <div className="spares-subblock" id="spares-anchor">
        <div className="spares-subblock-inner">
          <div className="spares-photo-wrap">
            <img
              src="/images/srs-engine-spares.png"
              alt="Genuine multi-brand forklift engine spare parts and components"
              loading="lazy"
            />
          </div>

          <div className="spares-details">
            <p className="section-label">SPARES</p>
            <h2>The Part You Need. When You Need It.</h2>
            <p className="spares-tagline">
              Extensive stock of OEM and genuine replacement components for all major forklift brands.
            </p>

            <div className="spares-categories-wrap">
              <p className="spares-cat-label">Available Spare Part Categories:</p>
              <div className="spares-categories-list">
                {[
                  "Engine",
                  "Transmission",
                  "Hydraulic",
                  "Electrical",
                  "Forks",
                  "Tyres",
                  "Wheels",
                  "Filters",
                  "Batteries",
                  "Safety Equipment",
                ].map((cat) => (
                  <span className="spares-category-pill" key={cat}>
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="spares-prompt-box">
              <p className="spares-prompt-lead">
                Have a part number or machine model? Send it to us.
              </p>
              <p className="spares-prompt-sub">
                Our parts desk will verify availability and confirm exact specifications.
              </p>
              <a className="button button--secondary" href="#contact">
                Find a Part →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   09 — SPECIALIZED SOLUTIONS
   More Than Forklifts.
   PU / Vulkollan Wheels | Goods Lifts | Dock Levelers | Customized Machinery
   ========================================================================== */
function SpecializedSolutions() {
  return (
    <section className="section solutions-section" id="solutions">
      <div className="solutions-header">
        <p className="section-label">SPECIALIZED SOLUTIONS</p>
        <h2>More Than Forklifts.</h2>
        <p>In-house manufacturing and industrial solutions engineered for specific facility demands.</p>
      </div>

      <div className="solutions-showcase-grid">
        {/* PU / Vulkollan Wheels */}
        <div className="solution-showcase-card">
          <div className="sol-thumb">
            <img
              src="/images/srs-wheels.png"
              alt="SRS Polyurethane and Vulkollan wheels for industrial equipment"
              loading="lazy"
            />
          </div>
          <div className="sol-body">
            <h3>PU / Vulkollan Wheels</h3>
            <p className="sol-spec">SRS Urethane Wheels · Custom Sizes · Re-Bonding</p>
            <a className="text-cta-simple" href="#contact">
              Discuss Wheel Requirement <Icon name="arrow" />
            </a>
          </div>
        </div>

        {/* Goods Lifts */}
        <div className="solution-showcase-card">
          <div className="sol-thumb">
            <img
              src="/images/srs-goods-lift.png"
              alt="Hydraulic goods lift for multi-floor factory conveyance"
              loading="lazy"
            />
          </div>
          <div className="sol-body">
            <h3>Goods Lifts</h3>
            <p className="sol-spec">500 kg to 15,000 kg · Up to 12 m Lift Height</p>
            <a className="text-cta-simple" href="#contact">
              Enquire Goods Lift <Icon name="arrow" />
            </a>
          </div>
        </div>

        {/* Dock Levelers */}
        <div className="solution-showcase-card">
          <div className="sol-thumb">
            <img
              src="/images/srs-dock-leveler.png"
              alt="Hydraulic dock leveler for container loading bays"
              loading="lazy"
            />
          </div>
          <div className="sol-body">
            <h3>Dock Levelers</h3>
            <p className="sol-spec">Loading-Bay Equipment</p>
            <a className="text-cta-simple" href="#contact">
              Enquire Dock Leveler <Icon name="arrow" />
            </a>
          </div>
        </div>

        {/* Customized Machinery */}
        <div className="solution-showcase-card">
          <div className="sol-thumb">
            <img
              src="/images/srs-custom-machinery.png"
              alt="Customized material handling machinery and industrial fixtures"
              loading="lazy"
            />
          </div>
          <div className="sol-body">
            <h3>Customized Machinery</h3>
            <p className="sol-spec">Engineered To Specification</p>
            <a className="text-cta-simple" href="#contact">
              Discuss Custom Requirement <Icon name="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   10 — CLIENT TESTIMONIALS
   Verified Feedback from Manufacturing & Warehousing Leaders
   ========================================================================== */
function Testimonials() {
  const testimonials = [
    {
      initials: "MS",
      quote:
        "When our 3-tonne reach truck suffered mast hydraulic pressure loss during a critical dispatch shift, SRS deployed a service technician within 90 minutes. Their immediate on-site diagnostic and genuine spare replacement prevented a severe line stoppage.",
      author: "M. Selvakumar",
      title: "Head of Plant Logistics & Maintenance",
      company: "Tier-1 Automotive Component Facility, Sriperumbudur",
    },
    {
      initials: "RR",
      quote:
        "SRS supplied customized electric stackers and hydraulic dock levelers for our 12-bay distribution center. The build quality handles daily heavy container throughput effortlessly, and having their spares warehouse in Thirumudivakkam gives us 100% operational confidence.",
      author: "Rajesh Ramaswamy",
      title: "GM – Supply Chain Infrastructure",
      company: "Industrial Logistics & Distribution Hub, Oragadam",
    },
    {
      initials: "KA",
      quote:
        "Getting polyurethane wheel re-bonding done with precise Shore hardness used to take two weeks with outside vendors. SRS delivers custom PU wheels within 3 days that consistently outlast OEM lifespans under continuous rated load.",
      author: "K. Anbarasan",
      title: "Senior Maintenance Engineer",
      company: "Heavy Engineering & Fabrication Unit, Ambattur",
    },
  ]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section testimonials-inner">
        <div className="testimonials-header">
          <p className="testimonials-tagline">VERIFIED INDUSTRY FEEDBACK</p>
          <h1>CLIENT TESTIMONIALS</h1>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="testimonial-quote">
                {item.quote}
              </blockquote>
              <div className="testimonial-author-block">
                <div className="testimonial-avatar" aria-hidden="true">{item.initials}</div>
                <div className="testimonial-author-meta">
                  <strong className="testimonial-author-name">{item.author}</strong>
                  <span className="testimonial-author-title">{item.title}</span>
                  <span className="testimonial-author-company">{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   11 — CONTACT / ENQUIRY
   HAVE A REQUIREMENT?
   Tell us what you need. Our team will get in touch.
   044 4316 8330 | sales@sriramforklifters.com
   Right side: Clean, focused B2B enquiry form.
   ========================================================================== */
function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [requirement, setRequirement] = useState("")

  const requirementOptions = [
    "Equipment",
    "Service & Maintenance",
    "Spare Parts",
    "Used Equipment",
    "Goods Lift",
    "Dock Leveler",
    "PU / Vulkollan Wheels",
    "Customized Machinery",
    "Other",
  ]

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const req = String(data.get("requirement") || "General Requirement")
    const subject = `Website enquiry — ${req}`
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Phone/WhatsApp: ${data.get("phone")}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `Requirement: ${req}`,
      "",
      "Message:",
      String(data.get("message") ?? ""),
    ].join("\n")

    setSubmitted(true)
    window.location.href = `mailto:sales@sriramforklifters.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section contact-inner">
        <div className="contact-split">
          {/* Left side */}
          <div className="contact-copy">
            <p className="section-label">Contact us</p>
            <h2>Get in touch</h2>
            <div className="contact-map-wrap">
              <iframe
                title="SRS Material Handling - Thirumudivakkam Location Map"
                src="https://maps.google.com/maps?q=No.11%2C%20AR%20Rahuman%20Avenue%2C%20Thirumudivakkam%2C%20Chennai-600044&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact-direct-blocks">
              <div className="contact-direct-block">
                <span className="contact-direct-label">EMAIL ADDRESS</span>
                <a className="contact-direct-link" href="mailto:sales@sriramforklifters.com">
                  sales@sriramforklifters.com
                </a>
              </div>

              <div className="contact-direct-block">
                <span className="contact-direct-label">PHONE NUMBER</span>
                <div className="contact-phones-list">
                  <a className="contact-direct-link" href="tel:+914443168330">
                    044-43168330 - Office
                  </a>
                  <div className="contact-mobile-row">
                    <a className="contact-direct-link" href="tel:+919840779259">
                      098407 79259
                    </a>
                    <span className="contact-phone-sep">|</span>
                    <a className="contact-direct-link" href="tel:+917401444455">
                      074014 44455
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-direct-block">
                <span className="contact-direct-label">OUR ADDRESS</span>
                <address className="contact-address-text">
                  No.11, AR Rahuman Avenue, Thirumudivakkam, Chennai-600044
                </address>
              </div>
            </div>
          </div>

          {/* Right side — simple form */}
          <div className="contact-form-wrap">
            <form className="human-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send an Enquiry</h3>
              </div>

              <div className="form-fields">
                <label>
                  <span>NAME *</span>
                  <input name="name" type="text" required placeholder="Your name" />
                </label>

                <label>
                  <span>COMPANY *</span>
                  <input name="company" type="text" required placeholder="Company name" />
                </label>

                <label>
                  <span>PHONE *</span>
                  <input name="phone" type="tel" required placeholder="+91" />
                </label>

                <label>
                  <span>EMAIL (OPTIONAL)</span>
                  <input name="email" type="email" placeholder="Email address" />
                </label>

                <label className="field-full">
                  <span>WHAT DO YOU NEED? *</span>
                  <div className="select-wrap">
                    <select
                      name="requirement"
                      required
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value)}
                    >
                      <option value="" disabled>Select a requirement ↓</option>
                      {requirementOptions.map((opt) => (
                        <option value={opt} key={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>

                <label className="field-full">
                  <span>MESSAGE *</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us briefly about your requirement..."
                  />
                </label>
              </div>

              <div className="form-actions">
                <button className="button button--primary form-submit-btn" type="submit">
                  {submitted ? "Opening Email Client..." : "SEND ENQUIRY →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   FOOTER
   ========================================================================== */
function Footer() {
  return (
    <footer id="footer">
      <div className="section footer-inner">
        <div className="footer-top">
          <div className="footer-about">
            <img
              className="footer-logo"
              src="/images/srs-logo.png"
              alt="SRS Material Handling India Pvt Ltd"
            />
            <p>
              Since 2006, the inception of SRI RAM & SERVICE, a fully Involved, dedicated service provider begin the Servicing of Forklifts of all reputed brands, to support the Customers with the genuine supply of spares.
            </p>
          </div>

          <div className="footer-nav">
            <strong>Navigation</strong>
            <a href="#who-is-srs">About SRS</a>
            <a href="#what-we-provide">What We Provide</a>
            <a href="#equipment">Equipment</a>
            <a href="#service-spares">Service &amp; Spares</a>
            <a href="#solutions">Specialized Solutions</a>
            <a href="#proof">Real Work</a>
            <a href="#credibility">Company Credibility</a>
            <a href="#contact">Contact / Enquiry</a>
          </div>

          <div className="footer-contact">
            <strong>Thirumudivakkam, Chennai</strong>
            <p>
              No.11, AR Rahuman Avenue Adjacent To SIDCO Industrial Estate, Opposite SBI Bank,
              Thirumudivakkam, Chennai-600044
            </p>
            <div className="footer-contact-links">
              <p>
                <a href="tel:+914443168330">044-43168330</a> ·{" "}
                <a href="tel:+919840779259">098407 79259</a>
              </p>
              <p>
                <a href="tel:+917401444023">074014 44023</a> ·{" "}
                <a href="tel:+917401444455">074014 44455</a>
              </p>
              <p>
                <a href="mailto:sales@sriramforklifters.com">sales@sriramforklifters.com</a> ·{" "}
                <a href="mailto:palanig@sriramforklifters.com">palanig@sriramforklifters.com</a> ·{" "}
                <a href="mailto:marketing@sriramforklifters.com">marketing@sriramforklifters.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} SRS Material Handling India Pvt Ltd. All rights
            reserved.
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

/* ==========================================================================
   ROOT APP
   The 12-Section Sales Conversation Wireframe:
   01 HEADER
   02 HERO — WHAT SRS DOES
   03 TRUST / CLIENTS
   04 WHO IS SRS?
   05 THE CUSTOMER PROBLEM
   06 WHAT WE PROVIDE
   07 EQUIPMENT
   08 SERVICE + SPARES
   09 SPECIALIZED SOLUTIONS
   10 PROOF — REAL WORK
   11 WHY SRS / COMPANY CREDIBILITY
   12 CONTACT / ENQUIRY
   FOOTER
   ========================================================================== */
export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustClients />
        <WhoIsSRS />
        <WhatWeProvide />
        <Equipment />
        <ServiceAndSpares />
        <SpecializedSolutions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
