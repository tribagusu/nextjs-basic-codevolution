export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <nav style={{ padding: "10px 0 10px 0" }}>
          <a href="/" style={{ padding: "0 5px 0 0" }}>
            Home
          </a>
          <a href="/posts" style={{ padding: "0 5px 0 0" }}>
            Posts
          </a>
        </nav>

        <div>{children}</div>
      </body>
    </html>
  )
}
