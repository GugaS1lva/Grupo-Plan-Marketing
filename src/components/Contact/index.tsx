import { IoLocationSharp, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoLogoLinkedin } from "react-icons/io5";
import Image from "next/image"
import Link from "next/link"

const Contact = () => {
    return (
        <div id="Contact" className="text-white flex items-center justify-center lg:pl-[250px]">
            <div className="max-w-[575px] p-7 md:max-w-none xl:max-w-[1640px]">
                <div className="sm:flex sm:items-center">
                    <div className="mt-[30px]">
                        <span className="text-[#292929] text-7xl font-bold absolute">04.</span>
                        <h2 className="relative font-normal transition py-[20px] text-2xl">/Contato</h2>
                    </div>
                    <Link
                        className="text-sm flex items-center hover:text-[#b4b4b4] mb-[20px] mt-[40px] sm:mt-[50px] sm:ml-[100px] xl:ml-[500px]"
                        href="https://www.planmkt.com.br/blog"
                        target="_blank"
                    >
                        QUER TRABALHAR COM A GENTE?
                        <Image
                            className='ml-[5px]'
                            src="/arrow-link.svg"
                            alt=""
                            width={11}
                            height={11}
                        />
                    </Link>
                </div>
                <p className="mt-[20px] mb-[40px]">Gostou de saber mais sobre as inovações tecnológicas e também quer oferecer novas experiências aos seus clientes? Então entre em contato e marque um encontro real conosco para conversarmos sobre as infinitas possibilidades do mundo virtual.</p>

                <div className="flex items-center justify-center">
                    <form className="max-w-[575px] py-7 sm:w-[580px]">
                        <div className="flex flex-col my-[25px]">
                            <label htmlFor="name">Nome:</label>
                            <input
                                className="bg-[#1E1E1E] px-2 py-1 h-[40px] border-2 border-[#363636] rounded-md"
                                type="text"
                                name="name"
                                id="name"
                                required
                            />
                        </div>

                        <div className="flex flex-col my-[25px]">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                className="bg-[#1E1E1E] px-2 py-1 h-[40px] border-2 border-[#363636] rounded-md"
                                type="email"
                                name="email"
                                id="email"
                                required
                            />
                        </div>

                        <div className="flex flex-col my-[25px]">
                            <label htmlFor="number">Telefone:</label>
                            <input
                                className="bg-[#1E1E1E] px-2 py-1 h-[40px] border-2 border-[#363636] rounded-md"
                                type="number"
                                name="number"
                                id="number"
                                required
                            />
                        </div>

                        <div className="flex flex-col my-[25px]">
                            <label htmlFor="msg">Mensagem:</label>
                            <textarea
                                className="bg-[#1E1E1E] px-2 py-1 border-2 max-w-[220px] sm:max-w-full border-[#363636] rounded-md"
                                name="msg"
                                id="msg"
                                cols={30}
                                rows={5}
                            ></textarea>
                        </div>

                        <button type="submit" className="text-sm flex items-center hover:text-[#b4b4b4] mb-[20px] mt-[40px]">
                            ENVIAR
                            <Image
                                className='ml-[5px]'
                                src="/arrow-link.svg"
                                alt=""
                                width={11}
                                height={11}
                            />
                        </button>
                    </form>
                </div>

                <section className="flex flex-col items-center justify-center sm:flex-row sm:items-start gap-10 lg:flex-col lg:items-center">
                    <div className="lg:items-start lg:justify-center max-w-[300px] sm:w-[250px] sm:m-0 lg:flex lg:flex-row lg:gap-8">
                        <div className="text-center">
                            <h3 className="text-3xl">Siga-nos</h3>
                            <p className="my-[20px] lg:w-[190px] lg:leading-[27.5px]">Fique sempre por dentro de todas as novidades da Plan XP e de todas empresas do Grupo Plan Marketing.</p>
                            <div className="flex items-center justify-center gap-3">
                                <IoLogoFacebook className="bg-white rounded-full text-black hover:scale-110 hover:bg-[#b4b4b4] hover:cursor-pointer p-[5px] w-[30px] h-[30px]" />
                                <IoLogoInstagram className="bg-white rounded-full text-black hover:scale-110 hover:bg-[#b4b4b4] hover:cursor-pointer p-[5px] w-[30px] h-[30px]" />
                                <IoLogoYoutube className="bg-white rounded-full text-black hover:scale-110 hover:bg-[#b4b4b4] hover:cursor-pointer p-[5px] w-[30px] h-[30px]" />
                                <IoLogoLinkedin className="bg-white rounded-full text-black hover:scale-110 hover:bg-[#b4b4b4] hover:cursor-pointer p-[5px] w-[30px] h-[30px]" />
                            </div>
                        </div>

                        <div className="mt-[80px] sm:mt-[50px] mb-[30px] text-center lg:m-0 lg:w-[200px]">
                            <h3 className="flex items-center justify-center text-3xl"><IoLocationSharp />/RS</h3>
                            <div className="my-[15px] lg:w-[200px]">
                                <p className="lg:py-[5px]">Rua Arapei, 154</p>
                                <p className="lg:py-[5px]">Novo Hamburgo/RS</p>
                                <p className="lg:py-[5px]">Brasil</p>
                                <p className="lg:py-[5px]">+55 51 98229.0400</p>
                            </div>
                            <Link
                                className="text-sm flex items-center justify-center hover:text-[#b4b4b4] mb-[20px] underline"
                                href="https://www.google.com/maps/place/R.+Onze+de+Junho,+243+-+Oper%C3%A1rio,+Novo+Hamburgo+-+RS,+93315-130/@-29.6796239,-51.1356049,17z/data=!3m1!4b1!4m5!3m4!1s0x951943a1494f1ae7:0xc94882b9d1df84"
                                target="_blank"
                            >
                                VER NO GOOGLE MAPS
                                <Image
                                    className='ml-[5px]'
                                    src="/arrow-link.svg"
                                    alt=""
                                    width={11}
                                    height={11}
                                />
                            </Link>
                        </div>

                        <div className="mt-[50px] mb-[30px] text-center lg:m-0">
                            <h3 className="flex items-center justify-center text-3xl"><IoLocationSharp />/SP</h3>
                            <div className="my-[15px] lg:w-[200px]">
                                <p className="lg:py-[5px]">Rua Ibijaú, 355/Sala 1309</p>
                                <p className="lg:py-[5px]">São Paulo/SP</p>
                                <p className="lg:py-[5px]">Brasil</p>
                                <p className="lg:py-[5px]">+55 11 98871.8556</p>
                            </div>
                            <Link
                                className="text-sm flex items-center justify-center hover:text-[#b4b4b4] mb-[20px] underline "
                                href="https://www.google.com/maps/place/Av.+Ibija%C3%BA,+355+-+1309+-+Indian%C3%B3polis,+S%C3%A3o+Paulo+-+SP,+04524-020/@-23.6056085,-46.6661242,17.5z/data=!4m5!3m4!1s0x94ce5a05f01ecd4f:0x5046a2620"
                                target="_blank"
                            >
                                VER NO GOOGLE MAPS
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

                    <div className="lg:w-[685px] sm:w-[250px] lg:flex lg:flex-row">
                        <div className="flex flex-col items-center justify-center text-center mt-[80px] mb-[30px] sm:m-0 sm:mb-[20px]">
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

                        <div className="flex flex-col items-center justify-center text-center mb-[30px]">
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

                        <div className="flex flex-col items-center justify-center text-center mb-[30px]">
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
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact