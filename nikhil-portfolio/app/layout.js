import './globals.css'

export const metadata = {
  title: 'Nikhil Pesala - Portfolio',
  description: 'DevOps & Cloud Engineer | B.Tech CS Student at VIT Chennai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
