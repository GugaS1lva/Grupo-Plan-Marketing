import Image from "next/image"
import Link from "next/link"

const Blog = () => {
    return (
        <div id="blog" className=" text-white flex items-center justify-center lg:pl-[250px]">
            <div className="max-w-[575px] p-7 md:max-w-none">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <span className="text-[#292929] text-7xl font-bold absolute">02.</span>
                        <h2 className="relative font-normal transition py-[20px] text-2xl">/Plan News</h2>
                    </div>
                    <Link
                        className="text-sm flex items-center hover:text-[#b4b4b4] mb-[20px] mt-[40px] sm:mt-[20px] md:ml-10"
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
                </div>

                <div className="flex flex-wrap justify-center gap-5">
                    <div className=" text-[#F8F9FA] flex flex-col items-start my-5 bg-[#292929] rounded  max-w-[300px]">
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
                            <p className="text-sm leading-loose">Entre agora em nosso espa??o no Metaverso e conhe??a v??rios projetos e cases do Grupo Plan.</p>
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
                    <div className=" text-[#F8F9FA] flex flex-col items-start my-5 bg-[#292929] rounded max-w-[300px]">
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
                            <h2 className="text-xl my-[15px]">Design responsivo, voc?? conhece?</h2>
                            <p className="text-sm leading-loose">A tela responsiva ?? uma t??cnica que viabiliza a adaptabilidade das telas em diferentes tipos e tamanhos.</p>
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
                    <div className=" text-[#F8F9FA] flex flex-col items-start my-5 bg-[#292929] rounded max-w-[300px]">
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
                            <h2 className="text-xl my-[15px]">Entenda o que ?? mobile first e por que ele ?? importante para a sua plataforma.</h2>
                            <p className="text-sm leading-loose">No desenvolvimento de um site ou uma plataforma web com certeza voc?? deve ter ouvido falar do termo mobile first</p>
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
                    <div className=" text-[#F8F9FA] flex flex-col items-start my-5 bg-[#292929] rounded max-w-[300px]">
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
                            <p className="text-sm leading-loose">Ter um site nos dias de hoje ?? ter uma pol??tica de dados alinhado ?? Lei Geral de Prote????o de Dados n?? 13.709/2018 (LGPD) pois essa ?? a lei que regula a coleta e armazenamento de dados.</p>
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
                    <div className=" text-[#F8F9FA] flex flex-col items-start my-5 bg-[#292929] rounded max-w-[300px]">
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
                            <h2 className="text-xl my-[15px]">Postos Charrua lan??am novo site</h2>
                            <p className="text-sm leading-loose">Com uma nova identidade e posicionameto nos ambientes f??sicos, a marca tamb??m investe no digital</p>
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
            </div>
        </div>
    )
}

export default Blog