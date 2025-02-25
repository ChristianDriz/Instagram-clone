
import Sidenav from "./_component/side_nav"
import Mobile_Nav from "./_component/mobile_nav"
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
                <aside className="hidden md:flex">
                    <Sidenav/>
                </aside>
                <main className="md:ml-[71px] xl:ml-[244px] 2xl:ml-[335px] flex py-4 overflow-hidden ">
                    {children}
                </main>
                <nav className="md:hidden sticky bottom-0">
                    <Mobile_Nav />
                </nav>
            </body>
        </html>
    )
}
