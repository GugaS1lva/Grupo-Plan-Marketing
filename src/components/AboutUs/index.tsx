import Image from "next/image"
import Link from "next/link"

const AboutUs = () => {
    return (
        <div id="QuemSomos" className="text-white flex items-center justify-center lg:pl-[250px]">
            <div className="max-w-[575px] p-7 md:max-w-none xl:max-w-[1640px]">
                <div className="mt-[30px]">
                    <span className="text-[#292929] text-7xl font-bold absolute">01.</span>
                    <h2 className="relative font-normal transition py-[20px] text-2xl">/Quem Somos</h2>
                </div>
                <p className="my-[20px]">Somos especialistas em sites que geral resultado, através de otimizações em SEO. aplicativos e games desenvolvidos com quem vive conectado a eles 24h. Nós vivemos de tecnologia e queremos sua empresa vivendo também.</p>
                <div className="my-[50px] flex flex-wrap justify-center items-center gap-[40px]">
                    <div className="flex flex-col items-center justify-center text-center w-[200px]">
                        <Image
                            src="/PlanLogo.webp"
                            width={100}
                            height={100}
                            quality={100}
                            alt=""
                        />
                        <p className="my-[20px] leading-loose">A Plan Marketing Digital é especializada em sites, intranets e redes sociais.</p>
                        <Link
                            className="text-sm flex items-center text-[#F1831C] hover:text-[#f79f4e]"
                            href="https://www.planmkt.com.br/planmkt"
                            target="_blank"
                        >
                            SAIBA MAIS
                            <Image
                                className='ml-[5px]'
                                src="/arrow-link.svg"
                                alt=""
                                width={11}
                                height={11}
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center w-[200px]">
                        <Image
                            src="/FullUpLogo.webp"
                            width={100}
                            height={100}
                            quality={100}
                            alt=""
                        />
                        <p className="my-[20px] leading-loose">A FullUp é uma agência especializada em branding design e campanhas.</p>
                        <Link
                            className="text-sm flex items-center text-[#ED1663] hover:text-[#f55d92]"
                            href="https://www.planmkt.com.br/fullup"
                            target="_blank"
                        >
                            SAIBA MAIS
                            <Image
                                className='ml-[5px]'
                                src="/arrow-link.svg"
                                alt=""
                                width={11}
                                height={11}
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center w-[200px]">
                        <Image
                            src="/PlanXPLogo.webp"
                            width={100}
                            height={100}
                            quality={100}
                            alt=""
                        />
                        <p className="my-[20px] leading-loose">A Plan XP é especializada em realidade virtual, realidade aumentada e jogos.</p>
                        <Link
                            className="text-sm flex items-center text-[#999999] hover:text-[#b4b4b4]"
                            href="https://www.planmkt.com.br/planxp"
                            target="_blank"
                        >
                            SAIBA MAIS
                            <Image
                                className='ml-[5px]'
                                src="/arrow-link.svg"
                                alt=""
                                width={11}
                                height={11}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs