import Sidenav from "./_component/side_nav"
import "./styles/global.css"

export const metadata = {
  title: 'Instagram clone',
  description: 'create by cj drix',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <aside>
          <Sidenav />
        </aside>
        <main className="xl:ml-[244px] 2xl:ml-[335px] flex py-4 overflow-hidden ">
          {children}
        </main>
      </body>
    </html>
  )
}
