import Leandro from '../assets/img/leandroPng.png'
import Leandro2 from '../assets/img/leandroFoto2.png'
import DownloadCV from '../assets/doc/teste.pdf'
import { BtnPrimary, BtnSecondary } from './Buttons'

const LandPage = () => {
  return (
    <section className="pt-28 lg:pt-36" id="landPage">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img 
                src={Leandro2}
                width={40}
                height={40}
                alt="Leandro Giovani"
                className='img-cover'
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              On-line
            </div>
          </div>

          <h2 className="portifolio__title text-5xl leading-tight font-semibold mt-5 mb-8 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] lg:text-[55px] lg:leading-[1.15] lg:mb-10">
            <span className="">Olá, eu sou<br></br></span>
            Leandro Maciel Giovani
          </h2>

          <div className="flex items-center gap-3">
            <BtnPrimary 
              label="Baixar Currículo"
              icon="download"
              href={DownloadCV}
            />

            <BtnSecondary 
              href="#about"
              label="Sobre mim"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="p-1 w-full rounded-full overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-50/70">
            <img 
              src={Leandro} 
              width={650}
              height={650}
              alt="Leandro Giovani"
              className='w-full rounded-full' 
            />
          </figure>
        </div>

      </div>
    </section>
  )
}

export default LandPage