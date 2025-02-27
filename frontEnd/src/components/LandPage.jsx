// Copyright 2025 LeandroGiovani

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

          <h2 className="portifolio-title text-4xl max-md:text-2xl leading-tight font-semibold mt-5 mb-8 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] lg:leading-[1.15] lg:mb-10 revealLandPage2 hidd flex-col">
            <span className='portifolio-subtitle'>Olá, eu sou<br></br></span>
              <TypeAnimation
                sequence={[
                  'Desenvolvedor Front-end',
                  1000,
                  'Apaixonado por programação',
                  1000,
                  'Leandro Maciel Giovani',
                  1000,
                ]}
                wrapper="span"
                speed={160}
                deletionSpeed={125}
                repeat={Infinity}
                preRenderFirstString={true}
                className="xl:text-5xl text-3xl max-[472px]:!text-2xl font-bold leading-snug"
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