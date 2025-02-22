

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