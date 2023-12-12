import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center my-10 space-y-10">
        <h2 className="text-4xl">Escolha uma linha</h2>
        <div className="flex space-x-20">
          <Image
            src={'/carousel-one.jpg'}
            width={200}
            height={200}
            alt="oii"
            className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-orange-300"
          />
          <Image
            src={'/carousel-one.jpg'}
            width={200}
            height={200}
            alt="oii"
            className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white"
          />
          <Image
            src={'/carousel-one.jpg'}
            width={200}
            height={200}
            alt="oii"
            className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white"
          />
          <Image
            src={'/carousel-one.jpg'}
            width={200}
            height={200}
            alt="oii"
            className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-around">
          <aside className="flex flex-col px-4">
            <p>Filtrar por</p>
            <div className="flex flex-col">
              <div className="flex space-y-2 sm:space-x-2">
                <input type="checkbox" className="mt-2" />
                <p className="text-sm">Camas</p>
              </div>
              <div className="flex space-y-2 sm:space-x-2">
                <input type="checkbox" className="mt-2" />
                <p className="text-sm">Beliches</p>
              </div>
              <div className="flex space-y-2 sm:space-x-2">
                <input type="checkbox" className="mt-2" />
                <p className="text-sm">Cabeceiras Box</p>
              </div>
              <div className="flex space-y-2 sm:space-x-2">
                <input type="checkbox" className="mt-2" />
                <p className="text-sm">Cômodas</p>
              </div>
              <div className="flex space-y-2 sm:space-x-2">
                <input type="checkbox" className="mt-2" />
                <p className="text-sm">Roupeiros / Modulados</p>
              </div>
              <div className="flex space-y-2 sm:space-x-2">
                <input type="checkbox" className="mt-2" />
                <p className="text-sm">Complementos</p>
              </div>
            </div>
          </aside>
          <section className="space-y-10">
            <div className="grid grid-cols-3 gap-12">
              <div className="col-span-1 text-center space-y-4">
                <Image
                  src={'/carousel-one.jpg'}
                  width={400}
                  height={400}
                  alt="oii"
                />
                <p className="font-bold text-sm">Cama Baú Jade</p>
              </div>
              <div className="col-span-1 text-center space-y-4">
                <Image
                  src={'/carousel-one.jpg'}
                  width={400}
                  height={400}
                  alt="oii"
                />
                <p className="font-bold text-sm">Cama Baú Jade</p>
              </div>
              <div className="col-span-1 text-center space-y-4">
                <Image
                  src={'/carousel-one.jpg'}
                  width={400}
                  height={400}
                  alt="oii"
                />
                <p className="font-bold text-sm">Cama Baú Jade</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-12">
              <div className="col-span-1 text-center space-y-4">
                <Image
                  src={'/carousel-one.jpg'}
                  width={400}
                  height={400}
                  alt="oii"
                />
                <p className="font-bold text-sm">Cama Baú Jade</p>
              </div>
              <div className="col-span-1 text-center space-y-4">
                <Image
                  src={'/carousel-one.jpg'}
                  width={400}
                  height={400}
                  alt="oii"
                />
                <p className="font-bold text-sm">Cama Baú Jade</p>
              </div>
              <div className="col-span-1 text-center space-y-4">
                <Image
                  src={'/carousel-one.jpg'}
                  width={400}
                  height={400}
                  alt="oii"
                />
                <p className="font-bold text-sm">Cama Baú Jade</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-12">
              <div className="col-span-1 text-center space-y-4">
                <Image
                  src={'/carousel-one.jpg'}
                  width={400}
                  height={400}
                  alt="oii"
                />
                <p className="font-bold text-sm">Cama Baú Jade</p>
              </div>
              <div className="col-span-1 text-center space-y-4">
                <Image
                  src={'/carousel-one.jpg'}
                  width={400}
                  height={400}
                  alt="oii"
                />
                <p className="font-bold text-sm">Cama Baú Jade</p>
              </div>
              <div className="col-span-1 text-center space-y-4">
                <Image
                  src={'/carousel-one.jpg'}
                  width={400}
                  height={400}
                  alt="oii"
                />
                <p className="font-bold text-sm">Cama Baú Jade</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
