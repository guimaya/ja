import Image from 'next/image'

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-10 bg-black w-full p-4 flex">
      <div className="flex space-x-10 items-center justify-center w-full">
        <a href="/">
          <Image src={'/logo-main.png'} width={100} height={100} alt="a" />
        </a>
        <div className="lg:flex space-x-3 hidden">
          <Image src={'/icon-brazil.svg'} width={20} height={20} alt="a" />
          <Image src={'/icon-spain.svg'} width={20} height={20} alt="a" />
          <Image src={'/icon-usa.svg'} width={20} height={20} alt="a" />
          <input
            className="bg-black border-2 rounded-full placeholder:text-white px-4"
            type="text"
            placeholder="Busque um produto   🔍"
          />
        </div>
        <nav className="hidden lg:inline-block">
          <ul className="flex space-x-10">
            <li>
              <a href="/empresa">Empresa</a>
            </li>
            <li>
              <a href="produtos">Produtos</a>
            </li>
            <li>
              <a>Onde Encontrar</a>
            </li>
            <li>
              <a>Notícias</a>
            </li>
            <li>
              <a>Contato</a>
            </li>
            <li>
              <a>Downloads</a>
            </li>
          </ul>
        </nav>
        <div className="space-x-4 hidden lg:inline-block">
          <a>
            <button className="text-sm button-sac py-2 px-3">
              Assistência Técnica 💬
            </button>
          </a>
          <a>
            <button className="text-sm button-primary py-2 px-3">
              Pedidos Online 👜
            </button>
          </a>
        </div>
        <div className="flex space-x-3">
          <Image src={'/icon-facebook.svg'} width={20} height={20} alt="a" />
          <Image src={'/icon-instagram.svg'} width={20} height={20} alt="a" />
          <Image src={'/icon-linkedin.svg'} width={20} height={20} alt="a" />
        </div>
      </div>
    </header>
  )
}
