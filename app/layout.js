export const metadata = {
  title: 'SubtitleForge — Subtitles that sync themselves',
  description: 'Drop a video URL, get perfectly timed subtitles in seconds. No uploads, no signup. Free Chrome extension.',
  keywords: 'subtitles, auto subtitle, video transcription, SRT, VTT, YouTube subtitles, free Chrome extension',
  openGraph: {
    title: 'SubtitleForge',
    description: 'Drop a video URL, get perfectly timed subtitles in seconds. Free Chrome extension.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
