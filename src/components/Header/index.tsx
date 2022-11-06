import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';

const Header = () => {
    const [showMenuMobile, setShowMenuMobile] = useState(false)

    return (
        <div className='p-4 fixed flex items-center justify-between w-screen pr-10 bg-[#1E1E1E] border-[#383838] border-b-[2px] z-10 lg:w-[250px] lg:p-14'>
            <Link href="/">
                <Image className='lg:scale-150' src="/logo-plan.png" alt="" width={80} height={80} />
            </Link>

            <div>
                <button
                    onClick={() => setShowMenuMobile(!showMenuMobile)}
                    className="lg:hidden text-2xl bg-[#3E3E3E] hover:bg-[#363636] w-[40px] h-[40px] flex items-center justify-center rounded-full"
                ><FaBars /></button>

                <div className={`${showMenuMobile ? '' : 'hidden'} lg:block absolute top-[79px] right-0 divide-y-2 border-[2px] border-[#383838] divide-[#383838] bg-[#1E1E1E] max-w-[300px] lg:max-w-[260px] lg:left-0 lg:top-[150px] lg:border-none`}>
                    <nav className='flex flex-col text-white px-12 lg:px-10 lg:h-screen lg:justify-center lg:mt-[-100px]'>
                        <ul>
                            <Link
                                onClick={() => setShowMenuMobile(!showMenuMobile)}
                                className='flex flex-col justify-center hover:text-[#686969] cursor-pointer my-[20px]'
                                href="#QuemSomos"
                            >
                                <span className='text-[#292929] text-7xl font-bold absolute'>01.</span>
                                <strong className='relative font-normal transition py-[20px]'>/QUEM SOMOS</strong>
                            </Link>

                            <Link
                                onClick={() => setShowMenuMobile(!showMenuMobile)}
                                className='flex flex-col justify-center hover:text-[#686969] cursor-pointer mb-[20px]'
                                href="#blog"
                            >
                                <span className='text-[#292929] text-7xl font-bold absolute'>02.</span>
                                <strong className='relative font-normal transition py-[20px]'>/PLAN NEWS</strong>
                            </Link>

                            <Link
                                onClick={() => setShowMenuMobile(!showMenuMobile)}
                                className='flex flex-col justify-center hover:text-[#686969] cursor-pointer mb-[20px]'
                                href="#OurClients"
                            >
                                <span className='text-[#292929] text-7xl font-bold absolute'>03.</span>
                                <strong className='relative font-normal transition py-[20px]'>/NOSSOS CLIENTES</strong>
                            </Link>

                            <Link
                                onClick={() => setShowMenuMobile(!showMenuMobile)}
                                className='flex flex-col justify-center hover:text-[#686969] cursor-pointer mb-[95px]'
                                href="#Contact"
                            >
                                <span className='text-[#292929] text-7xl font-bold absolute'>04.</span>
                                <strong className='relative font-normal transition py-[20px]'>/CONTATO</strong>
                            </Link>
                        </ul>
                    </nav>

                    <div className='text-white font-light text-2xl pl-8 pr-10 flex items-center lg:mt-[-78%]'>
                        <Link
                            onClick={() => setShowMenuMobile(!showMenuMobile)}
                            className='relative w-[170px] hover:text-[#b4b4b4] py-10'
                            href="https://www.planmkt.com.br/#form-two"
                            target="_blank"
                        >
                            <div>
                                <span className='text-[#292929] text-7xl font-bold absolute'>{";)"}</span>
                                <strong className='relative w-[170px]'>Que tal inovar com a gente?</strong>
                            </div>

                            <Image
                                className='absolute -right-5'
                                src="/arrow-link.svg"
                                alt=""
                                width={15}
                                height={15}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header