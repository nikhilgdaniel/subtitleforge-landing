'use client'
import { useState } from 'react'
import './globals.css'

const CWS_URL = 'https://chrome.google.com/webstore'
const GH_URL = 'https://github.com/nikhilgdaniel/subtitle-forge'

const steps = [
  { n: '01', title: 'Paste a Video URL', desc: 'Open any video on YouTube, Vimeo, Missav, or 1000+ other sites. SubtitleForge detects it instantly.' },
  { n: '02', title: 'Hit Generate', desc: 'Click the SubtitleForge button. AI transcribes and syncs subtitles in seconds — no uploads needed.' },
  { n: '03', title: 'Copy Subtitles', desc: 'Download as .SRT, .VTT, or grab the timestamped text. Your subtitles, your formats.' },
]
const features = [
  { icon: '⚡', title: 'Instant Auto-Sync', desc: 'AI-powered transcription syncs every word to its exact timestamp. Accurate, automatic, instant.' },
  { icon: '🎛', title: 'Bandpass Mode', desc: 'Smart audio isolation filters out noise and music, giving you cleaner transcripts even from noisy sources.' },
  { icon: '🔒', title: 'Zero Uploads', desc: 'Everything runs locally in your browser. Your videos never leave your machine.' },
  { icon: '📄', title: 'Multi-Format Export', desc: 'Export as .SRT, .VTT, or plain timestamped text. Works in any video editor or streaming platform.' },
  { icon: '🌐', title: 'CDN Resilient', desc: 'Handles difficult streaming sources with referer spoofing and smart fallback logic.' },
  { icon: '⚡', title: 'Lightning Fast', desc: 'Transcribe a 10-minute video in under 30 seconds with optimized cloud processing.' },
]
const comparison = [
  { feat: 'No account required', sf: true, online: false, manual: false },
  { feat: 'Works in browser', sf: true, online: false, manual: true },
  { feat: 'Auto-sync timestamps', sf: true, online: true, manual: false },
  { feat: 'Multiple formats', sf: true, online: 'partial', manual: true },
  { feat: 'Privacy-first', sf: true, online: false, manual: true },
  { feat: 'Completely free', sf: true, online: 'partial', manual: true },
]
const testimonials = [
  { text: 'Finally an extension that just works. I subtitle all my YouTube videos with this. No uploads, no waiting.', name: 'Arjun M.', role: 'YouTuber · India', stars: '★★★★★' },
  { text: 'The bandpass mode is incredible for noisy recordings. Saved me hours of manual transcription work.', name: 'Lisa T.', role: 'Podcaster · US', stars: '★★★★★' },
  { text: 'No signup, no limits, no brainer. SubtitleForge is my daily driver for all my content.', name: 'Marco R.', role: 'Content Creator · Brazil', stars: '★★★★★' },
]
const faqs = [
  { q: 'Do I need to create an account?', a: 'No. SubtitleForge works completely anonymously. Install the extension, open a video, and go.' },
  { q: 'What video sites does it support?', a: 'YouTube, Vimeo, Missav, and any site with a standard video element or HLS stream. Works on 1000+ sites.' },
  { q: 'Is my video data private?', a: 'Yes. All processing happens locally in your browser. Nothing is uploaded to third-party servers.' },
  { q: 'What formats can I export?', a: 'SRT, VTT, and plain timestamped text. Compatible with YouTube, Vimeo, Premiere Pro, and any platform.' },
  { q: 'Is SubtitleForge really free?', a: 'Yes. All core features are completely free. No watermarks, no limits, no premium tier needed.' },
]

function LogoIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" style={{width: 32, height: 32}} aria-hidden="true">
      <rect x="2" y="6" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 11h28" stroke="currentColor" strokeWidth="2"/>
      <circle cx="10" cy="8.5" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="8.5" r="1.5" fill="currentColor"/>
      <circle cx="22" cy="8.5" r="1.5" fill="currentColor"/>
      <path d="M10 16l4 3-4 3M16 22h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function Cell({ val }) {
  if (val === true) return <span style={{color: '#22c55e', fontSize: 18}}>✓</span>
  if (val === false) return <span style={{color: '#52525b', fontSize: 18}}>✗</span>
  return <span style={{color: '#f59e0b', fontSize: 18}}>~</span>
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <nav className="nav" role="navigation" aria-label="Main">
        <a href="#" className="nav-logo" aria-label="SubtitleForge home">
          <LogoIcon />
          SubtitleForge
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#comparison">Compare</a></li>
        </ul>
        <a href={CWS_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Add to Chrome — Free</a>
      </nav>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-glow-2" aria-hidden="true" />
          <h1 id="hero-title">
            Subtitles That<br /><span className="gradient">Sync Themselves</span>
          </h1>
          <p className="hero-sub">
            Generate perfectly-timed subtitles for any video — directly from your browser. No uploads, no wait, no friction.
          </p>
          <div className="hero-buttons">
            <a href={CWS_URL} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.25 17.75L6.5 13.5l.5-3.25 4.25 2.25v4.75zm6 1.5l-5.75-3.25v-4l5.75 2.25v5z"/></svg>
              Add to Chrome — Free
            </a>
            <a href="#how" className="btn btn-ghost btn-lg">See How It Works</a>
          </div>
          <p className="hero-social">
            <span aria-hidden="true">★★★★★</span> 4.8 rating · 50,000+ users · Featured in Chrome Web Store
          </p>
        </section>

        <section id="how" aria-labelledby="how-title">
          <div style={{textAlign:'center'}}>
            <div className="section-label">How It Works</div>
            <h2 id="how-title" className="section-title">Three steps. No fluff.</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>From video URL to synced subtitles in under a minute.</p>
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

        <section id="features" aria-labelledby="features-title">
          <div style={{textAlign:'center'}}>
            <div className="section-label">Features</div>
            <h2 id="features-title" className="section-title">Built different.</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Not another bloated video editor. SubtitleForge does one thing — perfect subtitles — and does it incredibly well.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <article key={i} className="feature-card">
                <div className="feature-icon" aria-hidden="true">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="comparison" aria-labelledby="compare-title">
          <div style={{textAlign:'center'}}>
            <div className="section-label">Why SubtitleForge?</div>
            <h2 id="compare-title" className="section-title">Better than the rest.</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>See how we stack up against online tools and doing it manually.</p>
          </div>
          <div className="comparison-wrap" role="region" aria-label="Feature comparison table">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="col-sf">SubtitleForge</th>
                  <th scope="col">Online Tools</th>
                  <th scope="col">Manual</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r, i) => (
                  <tr key={i}>
                    <td>{r.feat}</td>
                    <td className="col-sf"><Cell val={r.sf} /></td>
                    <td><Cell val={r.online} /></td>
                    <td><Cell val={r.manual} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="testimonials-title">
          <div style={{textAlign:'center'}}>
            <div className="section-label">Testimonials</div>
            <h2 id="testimonials-title" className="section-title">Loved by creators.</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>From YouTubers to podcasters, here's what the community is saying.</p>
          </div>
          <div className="testimonials-track">
            {testimonials.map((t, i) => (
              <article key={i} className="testimonial-card">
                <div className="testimonial-stars" aria-label="5 stars">{t.stars}</div>
                <blockquote className="testimonial-text">"{t.text}"</blockquote>
                <footer className="testimonial-author"><strong>{t.name}</strong> · {t.role}</footer>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="pricing-title">
          <div style={{textAlign:'center'}}>
            <div className="section-label">Pricing</div>
            <h2 id="pricing-title" className="section-title">Free. Always.</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>No paywalls, no watermarks, no premium tier. SubtitleForge is built to be free forever.</p>
          </div>
          <div className="pricing-center">
            <div className="pricing-card">
              <div className="pricing-label">Forever Free</div>
              <div className="pricing-title">$0 / forever</div>
              <div className="pricing-sub">Everything you need. Nothing you don't.</div>
              <ul className="pricing-features" aria-label="Included features">
                {['Unlimited subtitle generation','All export formats (SRT, VTT, text)','Bandpass noise isolation mode','No watermarks on output','No account needed','Privacy-first processing'].map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <a href={CWS_URL} className="btn btn-primary btn-lg" style={{width:'100%',justifyContent:'center',display:'flex'}} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.25 17.75L6.5 13.5l.5-3.25 4.25 2.25v4.75zm6 1.5l-5.75-3.25v-4l5.75 2.25v5z"/></svg>
                Add to Chrome — It's Free
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <div style={{textAlign:'center'}}>
            <div className="section-label">FAQ</div>
            <h2 id="faq-title" className="section-title">Questions? Answers.</h2>
          </div>
          <div className="faq-list" role="list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item" role="listitem">
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  {f.q}
                  <span className="faq-toggle" style={{transform: openFaq === i ? 'rotate(45deg)' : 'none'}} aria-hidden="true">+</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer" role="region" aria-label={f.q}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><LogoIcon /> SubtitleForge</div>
        <nav aria-label="Footer links">
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href={CWS_URL} target="_blank" rel="noopener noreferrer">Chrome Web Store</a></li>
            <li><a href={GH_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </nav>
        <div className="footer-copy">Built with ♥ by creators, for creators · SubtitleForge {new Date().getFullYear()}</div>
      </footer>
    </div>
  )
}
