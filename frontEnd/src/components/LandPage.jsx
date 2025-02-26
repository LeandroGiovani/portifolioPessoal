import Leandro from '../assets/img/leandroPng.png'
import Leandro2 from '../assets/img/leandroFoto2.png'
import DownloadCV from '../assets/doc/leandroCV.pdf'
import { BtnPrimary, BtnSecondary } from './Buttons'
import { TypeAnimation } from 'react-type-animation';

const LandPage = () => {
  return (
    <section className="pt-28 lg:pt-36" id="landPage">
      <div className="container items-center lg:grid lg:gap-10 min-lg:grid-cols-[3.09fr_1fr] min-xl:grid-cols-[1.95fr_1fr]">

        <div>
          <div className="flex items-center gap-3 revealLandPage1 hidd">
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

          <h2 className="portifolio-title text-4xl leading-tight font-semibold mt-5 mb-8 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] lg:leading-[1.15] lg:mb-10 revealLandPage2 hidd flex-col">
            <span className='portifolio-subtitle'>Olá, eu sou<br></br></span>
              <TypeAnimation
                sequence={[
                  'Leandro Maciel Giovani',
                  1000,
                  'Desenvolvedor Front-end',
                  1000,
                  'Apaixonado por programação',
                  1000,
                ]}
                wrapper="span"
                speed={75}
                repeat={Infinity}
                preRenderFirstString={true}
                className="text-5xl font-bold leading-snug"
              />
          </h2>

          <div className="flex items-center gap-3 revealLandPage3 hidd">
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

        <div className="block max-lg:!hidden revealLandPageProfile hidd">
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