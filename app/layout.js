export const metadata = {
  title: 'SubtitleForge — Subtitles That Sync Themselves',
  description: 'Generate perfectly-timed subtitles for any video directly from your browser. No uploads, no wait, no friction. Free Chrome extension.',
  keywords: 'subtitles, auto subtitle, video transcription, SRT, VTT, YouTube subtitles, free subtitle generator, Chrome extension',
  openGraph: {
    title: 'SubtitleForge — Subtitles That Sync Themselves',
    description: 'Generate perfectly-timed subtitles for any video in seconds. Free Chrome extension.',
    type: 'website',
    url: 'https://subtitleforge.com',
    siteName: 'SubtitleForge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SubtitleForge — Subtitles That Sync Themselves',
    description: 'Generate perfectly-timed subtitles for any video in seconds. Free Chrome extension.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://subtitleforge.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
