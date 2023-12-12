import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen">
      <Header />
      <section className="flex flex-col justify-center items-center text-center my-8 space-y-8">
        <h2 className="text-5xl">Nossa História</h2>
        <p className="container text-lg">
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
      <section className="flex flex-col lg:flex-row max-w-7xl justify-center lg:space-x-20 space-y-20 lg:space-y-0 items-center mx-auto px-4 lg:px-0">
        <div className="flex flex-col justify-center text-center space-y-4">
          <h2 className="text-4xl">Missão</h2>
          <strong className="text-lg">Transformando o novo em um lar</strong>
          <p className="text-lg">
            Para transmitir a beleza de um novo lar é preciso unir qualidade,
            durabilidade e encanto. Por isso, esses são conceitos que carregamos
            e levamos como pilares de atuação; transformar o seu novo em um
            verdadeiro lar.
          </p>
        </div>
        <div className="flex flex-col justify-center text-center space-y-4">
          <h2 className="text-4xl">Visão</h2>
          <strong className="text-lg">
            Variedade para todas as fases da vida
          </strong>
          <p className="text-lg">
            Valorizamos a evidência que nossas peças possuem, presentes em todos
            os pontos da vida, do nascimento ao casamento. Acompanhamos cada
            nova fase da sua história, sempre ofertando o há de melhor para
            transformar o seu lar.
          </p>
        </div>
        <div className="flex flex-col justify-center text-center space-y-4">
          <h2 className="text-4xl">Valores</h2>
          <strong className="text-lg">Qualidade que inspira o movimento</strong>
          <p className="text-lg">
            Valorizamos aquilo que também é o seu bem mais precioso: sua
            família.  Assim, oferecemos peças que trazem o gosto de estar em
            todos os cômodos da casa, entregando o que há de melhor no mercado
            moveleiro.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
