const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={"fledx items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 group" + classes}>
        <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900">
            <img 
                src={imgSrc}
                width={32}
                height={32}
                alt={label}
                className="" 
            />
        </figure>

        <div>
            <h3>{label}</h3>

            <p className="text-zinc-400 text-sm">
                {desc}
            </p>
        </div>
    </div>
  )
}

export default SkillCard