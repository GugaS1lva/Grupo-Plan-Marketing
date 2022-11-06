import Image from "next/image"
import Link from "next/link"

const OurClients = () => {
    return (
        <div id="OurClients" className="text-white flex items-center justify-center lg:pl-[250px]">
            <div className="max-w-[575px] p-7 md:max-w-none xl:max-w-[1680px]">
                <div className="mt-[30px]">
                    <span className="text-[#292929] text-7xl font-bold absolute">03.</span>
                    <h2 className="relative font-normal transition py-[20px] text-2xl">/Nossos Clientes</h2>
                </div>
                <p className="my-[20px]">O Grupo Plan Marketing ao longo dos seus 20 anos já desenvolveu mais de 3500 projetos sempre com comprometimento e prezado pela qualidade.</p>
                <Link
                    className="text-sm flex items-center hover:text-[#b4b4b4] mb-[20px] mt-[40px]"
                    href="https://www.planmkt.com.br/nossos-clientes"
                    target="_blank"
                >
                    CLIQUE PARA VER TODOS OS CLIENTES
                    <Image
                        className='ml-[5px]'
                        src="/arrow-link.svg"
                        alt=""
                        width={11}
                        height={11}
                    />
                </Link>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center">
                    <Image className="px-[20px]" src="/dannyLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/bettaninLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/skaLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/taurusLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/umbroLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/comotoLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/gerdauLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/atlasLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/biomicaLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/sicrediLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/killingLogo.webp" width={558} height={649} quality={100} alt="" />
                    <Image className="px-[20px]" src="/kisafixLogo.webp" width={558} height={649} quality={100} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OurClients