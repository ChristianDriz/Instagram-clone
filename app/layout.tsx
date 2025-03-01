import Sidenav from "./components/layout/navbar/side_nav"
import Mobile_Nav from "./components/layout/navbar/mobile_nav"
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
                <main className="md:ml-[71px] xl:ml-[244px] 2xl:ml-[335px]">
                    {children}
                </main>
                <nav className="md:hidden fixed w-full bottom-0">
                    <Mobile_Nav />
                </nav>
            </body>
        </html>
    )
}
