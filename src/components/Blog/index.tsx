import Image from "next/image"
import Link from "next/link"

const Blog = () => {
    return (
        <div id="blog" className="p-7 text-white">
            <div className="mt-[30px]">
                <span className="text-[#292929] text-7xl font-bold absolute">02.</span>
                <h2 className="relative font-normal transition py-[20px] text-2xl">/Plan News</h2>
            </div>

            <Link
                className="text-sm flex items-center hover:text-[#b4b4b4] mb-[20px] mt-[40px]"
                href="https://www.planmkt.com.br/blog"
                target="_blank"
            >
                CLIQUE AQUI PARA VER TODO O BLOG
                <Image
                    className='ml-[5px]'
                    src="/arrow-link.svg"
                    alt=""
                    width={11}
                    height={11}
                />
            </Link>

            <div className=" text-[#F8F9FA] flex flex-col items-start my-5 bg-[#292929] rounded">
                <div>
                    <Image
                        className="rounded-t"
                        src="/MetaverseCardImg.webp"
                        width={558}
                        height={649}
                        quality={100}
                        alt=""
                    />
                </div>

                <div className="p-5">
                    <span className="bg-[#F8F9FA] text-[#3b3b3b] text-sm px-2 py-[1px] font-bold">PLAN</span>
                    <h2 className="text-xl my-[15px]">METAVERSO Plan</h2>
                    <p className="text-sm leading-loose">Entre agora em nosso espaço no Metaverso e conheça vários projetos e cases do Grupo Plan.</p>
                    <Link
                        className="text-sm flex items-center hover:text-[#b4b4b4] mt-[25px]"
                        href="https://www.planmkt.com.br/blog/detalhes/metaverso-plan"
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

            <div className=" text-[#F8F9FA] flex flex-col items-start my-5 bg-[#292929] rounded">
                <div>
                    <Image
                        className="rounded-t"
                        src="/ResponsiveDesignCardImg.webp"
                        width={558}
                        height={649}
                        quality={100}
                        alt=""
                    />
                </div>

                <div className="p-5">
                    <span className="bg-[#F8F9FA] text-[#3b3b3b] text-sm px-2 py-[1px] font-bold">PLAN</span>
                    <h2 className="text-xl my-[15px]">Design responsivo, você conhece?</h2>
                    <p className="text-sm leading-loose">A tela responsiva é uma técnica que viabiliza a adaptabilidade das telas em diferentes tipos e tamanhos.</p>
                    <Link
                        className="text-sm flex items-center hover:text-[#b4b4b4] mt-[25px]"
                        href="https://www.planmkt.com.br/blog/detalhes/design-responsivo-voce-conhece"
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

            <div className=" text-[#F8F9FA] flex flex-col items-start my-5 bg-[#292929] rounded">
                <div>
                    <Image
                        className="rounded-t"
                        src="/MobileFirstCardImg.webp"
                        width={558}
                        height={649}
                        quality={100}
                        alt=""
                    />
                </div>

                <div className="p-5">
                    <span className="bg-[#F8F9FA] text-[#3b3b3b] text-sm px-2 py-[1px] font-bold">PLAN</span>
                    <h2 className="text-xl my-[15px]">Entenda o que é mobile first e por que ele é importante para a sua plataforma.</h2>
                    <p className="text-sm leading-loose">No desenvolvimento de um site ou uma plataforma web com certeza você deve ter ouvido falar do termo mobile first</p>
                    <Link
                        className="text-sm flex items-center hover:text-[#b4b4b4] mt-[25px]"
                        href="https://www.planmkt.com.br/blog/detalhes/entenda-o-que-e-mobile-first-e-por-que-ele-e-importante-para-a-sua-plataforma"
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

            <div className=" text-[#F8F9FA] flex flex-col items-start my-5 bg-[#292929] rounded">
                <div>
                    <Image
                        className="rounded-t"
                        src="/LGPDCardImg.webp"
                        width={558}
                        height={649}
                        quality={100}
                        alt=""
                    />
                </div>

                <div className="p-5">
                    <span className="bg-[#F8F9FA] text-[#3b3b3b] text-sm px-2 py-[1px] font-bold">PLAN</span>
                    <h2 className="text-xl my-[15px]">Por que meu site precisa de LGPD?</h2>
                    <p className="text-sm leading-loose">Ter um site nos dias de hoje é ter uma política de dados alinhado à Lei Geral de Proteção de Dados nº 13.709/2018 (LGPD) pois essa é a lei que regula a coleta e armazenamento de dados.</p>
                    <Link
                        className="text-sm flex items-center hover:text-[#b4b4b4] mt-[25px]"
                        href="https://www.planmkt.com.br/blog/detalhes/por-que-meu-site-precisa-de-lgpd"
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

            <div className=" text-[#F8F9FA] flex flex-col items-start my-5 bg-[#292929] rounded">
                <div>
                    <Image
                        className="rounded-t"
                        src="/PostosCharruaCardImg.webp"
                        width={558}
                        height={649}
                        quality={100}
                        alt=""
                    />
                </div>

                <div className="p-5">
                    <span className="bg-[#F8F9FA] text-[#3b3b3b] text-sm px-2 py-[1px] font-bold">POSTOS CHARRUA</span>
                    <h2 className="text-xl my-[15px]">Postos Charrua lançam novo site</h2>
                    <p className="text-sm leading-loose">Com uma nova identidade e posicionameto nos ambientes físicos, a marca também investe no digital</p>
                    <Link
                        className="text-sm flex items-center hover:text-[#b4b4b4] mt-[25px]"
                        href="https://www.planmkt.com.br/blog/detalhes/postos-charrua-lancam-novo-site"
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
    )
}

export default Blog