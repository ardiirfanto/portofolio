import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"

function Layout(props) {

    const router = useRouter()
    const bg = "bg-purple-900"
    let className = " flex items-center space-x-3 text-purple-100 p-2 rounded-md font-medium hover:bg-purple-800 focus:bg-purple-900 focus:shadow-outline";
    let classNameActive = bg + className

    return (
        <div>
            <Head>
                <title> Ardi Irfanto </title>
            </Head>
            <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-10">
                <div className="h-96 flex flex-wrap bg-white shadow-lg p-3 rounded-lg">
                    <div className="w-3/12 bg-purple-700 rounded-lg p-3">
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/">
                                    <a className={router.pathname == '/' ? classNameActive : className} >
                                        <span className="text-purple-300">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span>Profile</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/skill">
                                    <a className={router.pathname == '/skill' ? classNameActive : className}>
                                        <span className="text-purple-300">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                            </svg>
                                        </span>
                                        <span>Skill</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/portofolio">
                                    <a className={router.pathname == '/portofolio' ? classNameActive : className}>
                                        <span className="text-purple-300">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                            </svg>
                                        </span>
                                        <span>Portofolio</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a className={router.pathname == '/contact' ? classNameActive : className}>
                                        <span className="text-purple-300">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </span>
                                        <span>Contact</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="py-4">
                            <hr />
                            <div className="py-4 flex object-none object-bottom">
                                <a href="" target="_blank">
                                    <Image src={'/assets/img/fb.png'} width={40} height={40} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-9/12">
                        <div className="px-3">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout
