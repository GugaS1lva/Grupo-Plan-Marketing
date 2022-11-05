import Image from "next/image"
import Link from "next/link"

const Home = () => {
    return (
        <section className="flex flex-col sm:flex-row items-center">
            <Image
                className="p-4 rounded-[1.3rem] pt-[100px]"
                src="/metaverse-mobile.webp"
                width={558}
                height={649}
                quality={100}
                alt=""
            />

            <div className="p-7 text-[#F8F9FA] flex flex-col items-start">
                <span className="bg-[#F8F9FA] text-[#3b3b3b] text-sm px-2 py-[1px] font-bold">PLAN</span>

                <h2 className="text-3xl my-[30px]">METAVERSO Plan</h2>

                <p>Entre agora em nosso espaço no Metaverso e conheça vários projetos e cases do Grupo Plan.</p>
                <Link
                    className="bg-[#212529] hover:text-[#9c9c9c] text-white text-sm font-bold rounded px-[7px] py-[2px] mb-[15px]"
                    href="https://hubs.mozilla.com/aFKZGFg/grupo-plan-metaverso"
                    target="_blank"
                >METAVERSO Plan</Link>

                <Link
                    className="text-sm flex items-center hover:text-[#b4b4b4]"
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
        </section>
    )
}

export default Home