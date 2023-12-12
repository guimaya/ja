import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="mt-12 bg-black px-10 w-full py-10">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex space-y-6 flex-col sm:flex-row sm:w-1/2 justify-around items-center h-full">
          <div className="flex flex-col space-y-2 mt-9">
            <h2 className="text-2xl">Contato</h2>
            <address className="flex flex-col not-italic text-left space-y-2">
              <div className="flex space-x-2">
                <a href="tel:1732839400">17 3283-9400</a>
                <span className="w-0.5 h-5 bg-white" />
                <a href="mailto:contato@jamoveis.com.br">
                  contato@jamoveis.com.br
                </a>
              </div>
              <div className="flex space-x-2">
                <Image src={'/pin-icon.svg'} width={20} height={20} alt="Pin" />
                <p>R. Augusto Fernandes Santos, 1000, 15155-000 | Jaci - SP</p>
              </div>
            </address>
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl">Assine nossa newsletter</h2>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4">
              <input
                className="bg-black border-2 rounded-full placeholder:text-white px-4"
                type="text"
                placeholder="Seu Nome"
              />
              <input
                className="bg-black border-2 rounded-full placeholder:text-white px-4"
                type="text"
                placeholder="E-mail"
              />
              <a>
                <button className="button-primary py-2 px-8 !rounded-xl !font-normal">
                  Assinar
                </button>
              </a>
            </div>
            <div className="flex space-y-2 sm:space-x-2 sm:ml-4">
              <input type="checkbox" />
              <p className="text-sm ml-2 sm:ml-0">
                Li e concordo com os termos de uso e política de privacidade
              </p>
            </div>
          </div>
        </div>
        <Image
          src={'/logo-main.png'}
          width={200}
          height={100}
          alt="Logo J&A Móveis"
          className="hidden sm:block"
        />
      </div>
    </footer>
  )
}
