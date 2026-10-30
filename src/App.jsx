import { useState } from 'react';

const navigation = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Expertise', '#expertise'],
  ['Contact', '#contact'],
];

const experience = [
  {
    number: '01',
    role: 'DevOps Intern',
    company: 'Vected Technologies',
    location: 'Bhopal, Madhya Pradesh',
    kind: 'Infrastructure',
    points: [
      'Built, configured, and troubleshot Linux environments.',
      'Worked with Ubuntu administration, user accounts, and shell scripting.',
      'Practiced storage management, basic network services, and security controls.',
    ],
  },
  {
    number: '02',
    role: 'US IT Recruiter · Bench Sales',
    company: 'Jarloops LLC · Knightfox Infotech',
    location: 'Bhopal, Madhya Pradesh',
    kind: 'Talent acquisition',
    points: [
      'Managed recruiting from requirement intake and candidate sourcing through interviews, screening, and onboarding.',
      'Supported open client requirements and bench-sales recruiting.',
    ],
  },
  {
    number: '03',
    role: 'Staffing Specialist',
    company: 'GDKN Technologies Pvt. Ltd.',
    location: 'Bhopal, Madhya Pradesh',
    kind: 'Talent acquisition',
    points: [
      'Recruited across US and Canada for technical, non-technical, engineering, and healthcare roles.',
      'Worked on W-2, contract-to-hire, and direct-hire requirements with direct clients.',
      'Used Fieldglass, IQNavigator, Econometrix, and the company’s RCRMS ATS.',
    ],
    note: 'Client names in the resume include Honeywell, UPS, Cargill, Humana, and WestRock.',
  },
  {
    number: '04',
    role: 'IT Recruiter',
    company: 'CBS Inc. · Aviru IT Systems Pvt. Ltd.',
    location: 'Bhilai, Chhattisgarh',
    kind: 'Talent acquisition',
    points: [
      'Managed full-cycle recruiting for direct clients and implementation partners.',
      'Worked on W-2, C2C, contract-to-hire, and direct-hire roles.',
      'Supported placements across technology and state-client requirements.',
    ],
    note: 'Client and partner names in the resume include Cisco, Roche, Broadcom, Infosys, TCS, and Capgemini.',
  },
  {
    number: '05',
    role: 'Talent Acquisition Executive',
    company: 'SGS Technical Pvt. Ltd.',
    location: 'Indore, Madhya Pradesh',
    kind: 'Talent acquisition',
    points: [
      'Sourced and screened talent for client requirements using Vendor Management Systems including Fieldglass.',
      'Worked on mid- to senior-level IT, W-2, and direct-hire requirements.',
      'Contributed to recruiting and billing performance across the team.',
    ],
    note: 'Client names in the resume include CVS, Cargill, DuPont, and AbbVie.',
  },
  {
    number: '06',
    role: 'Technical Article Writer & Translator',
    company: 'Freelance',
    location: '',
    kind: 'Writing',
    points: [
      'Created and adapted written content for clients, including articles and book content.',
      'Provided transcription and translation support for written and voice content.',
    ],
  },
  {
    number: '07',
    role: 'Data Analyst',
    company: 'Teleperformance',
    location: 'Indore, Madhya Pradesh',
    kind: 'Data',
    points: [
      'Restructured US vehicle-insurance data into a new working format.',
      'Prepared reports to support benefits analysis and marketing insights.',
    ],
  },
  {
    number: '08',
    role: 'Customer Service · Sales Executive',
    company: 'Surevin BPO · Anvi Enterprises / Vodafone',
    location: 'Bhopal, Madhya Pradesh',
    kind: 'Customer experience',
    points: [
      'Supported customer-service operations, market reporting, and document review.',
      'Promoted after three months to support new connections, retailer schemes, and outlet authorizations.',
    ],
  },
  {
    number: '09',
    role: 'Founder',
    company: 'Exceptional IT Services Pvt. Ltd.',
    location: 'Bhopal, Madhya Pradesh',
    kind: 'Entrepreneurship',
    points: ['Founded an independent IT services firm.'],
  },
];

const skills = [
  { title: 'Linux & infrastructure', items: ['Ubuntu Server', 'User & group administration', 'File permissions', 'LVM & partitions', 'NFS · SSH · TCP/IP'] },
  { title: 'Server operations', items: ['Apache · Nginx', 'firewalld · iptables', 'SELinux', 'systemctl · journalctl', 'Log analysis'] },
  { title: 'Scripting & tools', items: ['Bash scripting', 'Linux command line', 'Fieldglass', 'IQNavigator', 'Econometrix · RCRMS'] },
  { title: 'People & delivery', items: ['Full-cycle recruiting', 'US & Canada staffing', 'Client relationships', 'Candidate onboarding', 'Vendor management'] },
];

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M5.2 14.8 14.3 5.7M6 5.5h8.5V14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

function SectionLabel({ children, number }) {
  return <div className="section-label"><span className="label-dot" />{number && <span className="label-number">{number}</span>}{children}</div>;
}

function BrandSymbol({ className }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 48 48" fill="none">
      <rect x="1" y="1" width="46" height="46" rx="14" fill="rgba(169,232,202,.08)" stroke="rgba(169,232,202,.3)" />
      <path d="M11 14h26M24 14v21m0-21h5.5a6.5 6.5 0 0 1 0 13H24m4-0.2L37 35" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="37" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Infrastructure', 'Talent acquisition', 'Writing', 'Data', 'Customer experience', 'Entrepreneurship'];
  const visibleExperience = activeFilter === 'All' ? experience : experience.filter((item) => item.kind === activeFilter);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Tushar Ramteke home"><BrandSymbol className="brand-symbol wordmark-mark" /><span className="wordmark-divider" /><span className="wordmark-label">Systems &amp; people</span></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>Resume <ArrowIcon diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-main">
            <div className="availability"><span /> BHOPAL, INDIA · OPEN TO A CONVERSATION</div>
            <h1>Good systems.<br />Great <span className="heading-accent">people.</span></h1>
            <p className="hero-copy">I’m <strong>Tushar Ramteke</strong> — a Linux and DevOps professional with a people-first background in recruiting, client partnerships, and operations.</p>
            <div className="hero-actions"><a className="button button-primary" href="#experience">Explore my work <ArrowIcon /></a><a className="text-link" href="mailto:Tushi3335@gmail.com">Let’s talk <ArrowIcon diagonal /></a></div>
            <div className="hero-meta"><span>BASED IN BHOPAL, INDIA</span><span>LINUX&nbsp; / &nbsp;DEVOPS&nbsp; / &nbsp;TALENT</span></div>
          </div>
          <aside className="hero-aside" aria-label="Professional profile">
            <div className="profile-card">
              <div className="card-topline"><span>PROFILE / 001</span><span className="card-spark" aria-hidden="true">✳</span></div>
              <div className="profile-monogram"><BrandSymbol className="profile-symbol" /></div>
              <div className="profile-name">Tushar Ramteke</div>
              <div className="profile-role">Systems-minded. People-focused.</div>
              <div className="profile-rule" />
              <div className="profile-facts"><div><span>01</span> Linux administration</div><div><span>02</span> DevOps foundations</div><div><span>03</span> Talent &amp; client delivery</div></div>
              <div className="profile-stamp">BHOPAL<br />INDIA</div>
            </div>
            <div className="side-caption"><span>ONE CAREER, MANY PERSPECTIVES</span><span>EST. IN BHOPAL&nbsp; ↗</span></div>
          </aside>
        </section>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-grid"><SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel><div><h2>Comfortable with a command line.<br />Just as comfortable with <span>people.</span></h2><p>My career spans Linux systems, staffing, customer experience, data, and writing. That mix shaped how I work: stay curious, understand the problem, and make the solution useful to the people who depend on it.</p><div className="education-line"><span className="education-icon">↗</span><span><strong>Bachelor’s in Information Technology</strong><small>LNCT &amp; S, RGTU · Bhopal · 2014</small></span></div></div></div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading"><div><SectionLabel number="02">EXPERIENCE</SectionLabel><h2>A career built<br />across <span>disciplines.</span></h2></div><p>From Linux environments to talent pipelines, every role has added a new way to solve problems and help teams move forward.</p></div>
          <div className="filter-bar" aria-label="Filter experience">
            {filters.map((filter) => <button key={filter} type="button" className={`filter-chip${activeFilter === filter ? ' is-active' : ''}`} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>
          <div className="experience-list" aria-live="polite">
            {visibleExperience.map((item) => <article className="experience-card" key={item.number}>
              <span className="experience-number">{item.number}</span>
              <div className="experience-content"><div className="experience-title-row"><div><div className="experience-kind">{item.kind}</div><h3>{item.role}</h3><div className="experience-company">{item.company}</div></div><ArrowIcon diagonal /></div>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>{item.note && <p className="experience-note">{item.note}</p>}
              </div>
              <div className="experience-location">{item.location || 'Independent'}</div>
            </article>)}
          </div>
          <p className="experience-footnote">Role dates weren’t listed in the source CV, so this portfolio presents experience without assigning dates.</p>
        </section>

        <section className="skills-section" id="expertise"><div className="section-wrap">
          <div className="section-heading skills-heading"><div><SectionLabel number="03">EXPERTISE</SectionLabel><h2>Technical depth.<br /><span>Human perspective.</span></h2></div><p>A practical toolkit shaped by hands-on infrastructure work and experience coordinating people, clients, and opportunities.</p></div>
          <div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><span className="skill-index">0{index + 1} / 04</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
          <div className="skills-note"><span className="note-mark">*</span><p><strong>A note on version numbers:</strong> The resume references Ubuntu Server versions 22–26. This site describes Ubuntu Server generically rather than presenting unverified version experience.</p></div>
        </div></section>

        <section className="contact-section section-wrap" id="contact"><div className="contact-card"><div className="contact-decoration" aria-hidden="true">↗</div><SectionLabel number="04">START A CONVERSATION</SectionLabel><h2>Let’s find the<br /><span>right way forward.</span></h2><p>Interested in Linux systems, DevOps opportunities, or a conversation about talent and technology? I’d be glad to hear from you.</p><a className="button button-dark" href="mailto:Tushi3335@gmail.com">Email Tushar <ArrowIcon diagonal /></a><div className="contact-details"><a href="mailto:Tushi3335@gmail.com">Tushi3335@gmail.com</a><a href="tel:+919098963335">+91 90989 63335</a><a href="https://www.linkedin.com/in/tushar-thomas-ramteke-64945798" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a></div></div></section>
      </main>

      <footer className="site-footer section-wrap"><a className="footer-mark" href="#home" aria-label="Tushar Ramteke home"><BrandSymbol className="brand-symbol footer-symbol" /></a><span>BUILT WITH CARE, IN BHOPAL, INDIA.</span><a href="#home">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} TUSHAR RAMTEKE</span></footer>
    </>
  );
}

export default App;