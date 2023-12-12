import Image from 'next/image'
import { kalam } from './layout'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen">
      <Header />
      <section className="p-8 hero">
        <div className="xl:w-1/4 h-3/4 flex flex-col justify-center items-center xl:items-baseline space-y-8">
          <h2
            className={`text-3xl xl:text-5xl text-center cursive xl:leading-snug xl:text-left ${kalam.className}`}
          >
            Transforme o quarto do seu filho em um mundo mágico de imaginação e
            conforto.
          </h2>
          <a>
            <button className="text-md lg:text-xl button-secondary py-2 px-3">
              Conheça nossa linha infantojuvenil
            </button>
          </a>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center space-y-12 my-8">
        <h2 className="text-5xl">Nossos Produtos</h2>
        <div className="flex space-x-4 max-w-2xl justify-center">
          <Image src={'/carousel-one.jpg'} width={550} height={550} alt="oii" />
          <Image src={'/carousel-two.jpg'} width={550} height={550} alt="oii" />
          <Image
            src={'/carousel-three.jpg'}
            width={550}
            height={550}
            alt="oii"
          />
        </div>
        <a>
          <button className="text-md lg:text-xl  button-primary py-2 px-3">
            Veja todos os produtos
          </button>
        </a>
      </section>
      <section className="flex flex-col justify-center items-center text-center my-8 space-y-8">
        <h2 className="text-5xl">Nossa História</h2>
        <p className="text-off-white container text-lg">
          A J&A Móveis nasceu em Março de 1999, na cidade de Mirassol, com o
          sonho de  empreender e transformar o mercado moveleiro. De forma
          modesta começou com a produção inicial apenas de camas e beliches e
          hoje já conta com um vasto catálogo que engloba: dormitórios, sala,
          cozinha, infanto-juvenil e escritório. Em 2013, com a expansão dos
          negócios, sua sede foi situada em Jaci e atualmente, com 24 anos de
          história, conta com mais de 100 funcionários em seu quadro. Levando um
          legado de qualidade e comprometimento, as peças produzidas carregam a
          garantia de um produto durável e encantador, sendo distribuídas pelo
          Brasil, Mercosul e países como Angola e Dubai.
        </p>
        <Image
          src={'/our-history.jpg'}
          width={1600}
          height={1600}
          alt="Nossa História"
        />
      </section>
      <Footer />
    </main>
  )
}
