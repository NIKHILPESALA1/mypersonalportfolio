import './globals.css'

export const metadata = {
  title: 'Nikhil Pesala - Portfolio',
  description: 'B.Tech CS student specializing in DevOps, Cloud Architecture, and AI/ML',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
