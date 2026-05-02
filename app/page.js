'use client'
import { useState } from 'react'
import './globals.css'

const CWS = 'https://chrome.google.com/webstore'
const GH = 'https://github.com/nikhilgdaniel/subtitle-forge'

const steps = [
  { n: '01', title: 'Paste a URL', desc: 'Open any video on YouTube, Vimeo, Missav, or 1000+ sites. SubtitleForge spots it instantly.' },
  { n: '02', title: 'Generate', desc: 'One click. AI transcribes and syncs subtitles in seconds. Nothing leaves your browser.' },
  { n: '03', title: 'Export', desc: 'Grab .SRT, .VTT, or timestamped text. Works everywhere.' },
]
const features = [
  { title: 'Auto-timed subtitles', desc: 'Word-level timestamps synced automatically. No manual work.', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
  { title: 'Bandpass isolation', desc: 'Filters out background noise and music. Cleaner transcripts from any source.', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 18l18-12L3 6v12z"/></svg>' },
  { title: 'Zero uploads', desc: 'All processing happens locally. Your videos never touch a remote server.', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>' },
  { title: 'Format flexibility', desc: 'Export as .SRT, .VTT, or plain timestamped text. Import into any platform.', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
  { title: 'Hardy on tricky CDNs', desc: 'Referer spoofing and fallback logic handle difficult streaming sources.', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
  { title: 'Under 30 seconds', desc: 'A 10-minute video transcribed in under half a minute. No queuing.', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' },
]
const comparison = [
  { feat: 'No signup needed', sf: 'check', online: 'cross', manual: 'cross' },
  { feat: 'Runs in browser', sf: 'check', online: 'cross', manual: 'check' },
  { feat: 'Timestamps auto-synced', sf: 'check', online: 'check', manual: 'cross' },
  { feat: 'Multiple export formats', sf: 'check', online: 'partial', manual: 'check' },
  { feat: 'Private — nothing uploaded', sf: 'check', online: 'cross', manual: 'check' },
  { feat: 'Free forever', sf: 'check', online: 'partial', manual: 'check' },
]
const testimonials = [
  { text: 'Subtitle all my YouTube videos with this. No uploads, no waiting, no account. Just works.', name: 'Arjun M.', role: 'YouTuber · India' },
  { text: 'Bandpass mode cleaned up noisy recordings I thought were unusable. Hours saved.', name: 'Lisa T.', role: 'Podcaster · US' },
  { text: 'No signup, no limits, no watermarks. My go-to for every video project now.', name: 'Marco R.', role: 'Content Creator · Brazil' },
]
const faqs = [
  { q: 'Do I need to make an account?', a: 'Nope. Install, open a video, go.' },
  { q: 'What sites does it work on?', a: 'YouTube, Vimeo, Missav, and any site with standard video. Works on 1000+ sites.' },
  { q: 'Is my data private?', a: 'Yes. Everything runs in-browser. Nothing is sent to third-party servers.' },
  { q: 'What formats can I export?', a: '.SRT, .VTT, and plain timestamped text. All major platforms supported.' },
  { q: 'Is it really free?', a: 'All features. No watermarks. No ads. No premium tier. Free forever.' },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" fill="none" style={{width:28,height:28}} aria-hidden="true">
      <rect x="2" y="5" width="28" height="21" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 10h28" stroke="currentColor" strokeWidth="2"/>
      <circle cx="10" cy="7.5" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="7.5" r="1.5" fill="currentColor"/>
      <circle cx="22" cy="7.5" r="1.5" fill="currentColor"/>
      <path d="M9 16l4 3.5L9 23M16 23h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function Cell({ v }) {
  if (v === 'check') return <span className="td-check">✓</span>
  if (v === 'cross') return <span className="td-cross">—</span>
  return <span className="td-partial">~</span>
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  return (
    <div>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <nav className="nav">
        <a href="#" className="nav-logo" aria-label="SubtitleForge home"><Logo /> SubtitleForge</a>
        <ul className="nav-links">
          <li><a href="#how">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#compare">Compare</a></li>
        </ul>
        <a href={CWS} className="nav-cta" target="_blank" rel="noopener noreferrer">
          <span>Get for free</span>
        </a>
      </nav>

      <main>
        <section className="hero" aria-labelledby="h-hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-glow-2" aria-hidden="true" />
          <h1 id="h-hero">Subtitles that<br /><span className="gradient">sync themselves</span></h1>
          <p className="hero-sub">Drop a video URL, get perfectly timed subtitles in seconds. No uploads, no signup, no waiting around.</p>
          <div className="hero-buttons">
            <a href={CWS} className="btn btn-solid btn-lg" target="_blank" rel="noopener noreferrer">Get SubtitleForge — Free</a>
            <a href="#how" className="btn btn-outline btn-lg">See how it works</a>
          </div>
          <p className="hero-social">
            <span>★★★★★</span> 4.8 · 50k+ users · Chrome Web Store
          </p>
        </section>

        <section id="how">
          <div className="section-header">
            <div className="section-label">How it works</div>
            <h2 className="section-title">Three steps. That's it.</h2>
            <p className="section-sub">From video URL to synced subtitles — under a minute.</p>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div key={i} className="step">
                <div className="step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features">
          <div className="section-header">
            <div className="section-label">Features</div>
            <h2 className="section-title">Everything you need.</h2>
            <p className="section-sub">One job, done properly.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <article key={i} className="feature-card">
                <div className="feature-icon" dangerouslySetInnerHTML={{ __html: f.svg }} />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="compare">
          <div className="section-header">
            <div className="section-label">Why us?</div>
            <h2 className="section-title">Stacked against the alternatives.</h2>
            <p className="section-sub">See how we compare to online tools and manual work.</p>
          </div>
          <div className="comparison-wrap" role="region" aria-label="Feature comparison">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="col-sf">SubtitleForge</th>
                  <th scope="col">Online tools</th>
                  <th scope="col">Manual</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r, i) => (
                  <tr key={i}>
                    <td>{r.feat}</td>
                    <td className="col-sf"><Cell v={r.sf} /></td>
                    <td><Cell v={r.online} /></td>
                    <td><Cell v={r.manual} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="section-header">
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">From the people using it.</h2>
          </div>
          <div className="testimonials-track">
            {testimonials.map((t, i) => (
              <article key={i} className="testimonial-card">
                <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
                <blockquote className="testimonial-text">"{t.text}"</blockquote>
                <footer className="testimonial-author"><strong>{t.name}</strong> · {t.role}</footer>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="section-header">
            <div className="section-label">Pricing</div>
            <h2 className="section-title">Free. No asterisks.</h2>
            <p className="section-sub">No watermarks, no premium tier, no "unlock for $5". Just free.</p>
          </div>
          <div className="pricing-center">
            <div className="pricing-card">
              <div className="pricing-label">Forever free</div>
              <div className="pricing-title">$0</div>
              <div className="pricing-sub">Everything. Nothing hidden.</div>
              <ul className="pricing-features" aria-label="Included features">
                {['Unlimited subtitle generation','All export formats — SRT, VTT, text','Bandpass noise isolation mode','No watermarks on output','No account, no tracking','100% private — nothing uploaded'].map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <a href={CWS} className="btn btn-solid btn-lg" target="_blank" rel="noopener noreferrer">Get SubtitleForge — Free</a>
            </div>
          </div>
        </section>

        <section>
          <div className="section-header">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Straight answers.</h2>
          </div>
          <div className="faq-list" role="list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item" role="listitem">
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  {f.q}
                  <span className="faq-toggle" style={{transform: openFaq === i ? 'rotate(45deg)' : 'none'}}>+</span>
                </button>
                {openFaq === i && <div className="faq-answer">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><Logo /> SubtitleForge</div>
        <nav aria-label="Footer"><ul className="footer-links">
          <li><a href={GH} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={CWS} target="_blank" rel="noopener noreferrer">Chrome Web Store</a></li>
        </ul></nav>
        <div className="footer-copy">SubtitleForge {new Date().getFullYear()} · Built by creators, for creators</div>
      </footer>
    </div>
  )
}
