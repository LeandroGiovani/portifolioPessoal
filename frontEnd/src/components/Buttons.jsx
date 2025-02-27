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

const BtnPrimary = ({ 
    href,
    target = '_self',
    label,
    icon,
    classes  
}) => {
  if (href){
    return(
      <a 
        href={href}
        download={"Currículo - Leandro Maciel Giovani"}
        target={target}
        className={"btn btn-primary " + classes}
      >
        {label}

        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    )
  } else {
    return(
      <button className={"btn btn-primary " + classes}>
        {label}

        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}

const BtnSecondary = ({ 
  href,
  target = '_self',
  label,
  icon,
  classes  
}) => {
if (href){
  return(
    <a 
      href={href}
      target={target}
      className={"btn btn-about " + classes}
    >
      {label}

      {icon ? 
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
        : undefined
      }
    </a>
  )
} else {
  return(
    <button className={"btn btn-about " + classes}>
      {label}

      {icon ? 
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
        : undefined
      }
    </button>
  )
}
}

export { BtnPrimary, BtnSecondary}