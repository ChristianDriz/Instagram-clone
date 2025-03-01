
import Link from 'next/link'
import Footer from './components/layout/footer'
 
export default function NotFound() {

    return (
        <div className='flex flex-col h-dvh'>
            <div className='grow flex justify-center items-center'>
                <div className='w-full text-center p-10'>
                    <span className='text-2xl font-medium'>Sorry, this page isn&apos;t available.</span>
                    <div className='my-7'>
                        <span>The link you followed may be broken, or the page may have been removed. </span>
                        <Link href="/" className='text-[#00376B]'>Go back to Instagram.</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}