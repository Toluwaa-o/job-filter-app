export default function job({company, logo, isNew, isFeatured, position, role, level, postedAt, contract, location, languages, tools, addFilter}) {
  return (
    <div className="job" style={{borderLeft: isFeatured && '6px solid hsl(180, 29%, 50%)'}}>
        <img src={logo} alt={company} />

        <div className="middle">

            <div className="middle-top">
              <h2>{company}</h2>
              {isNew && <p className="New">new</p>}
              {isFeatured && <p className="Featured">featured</p>}
            </div>

            <div className="middle-middle">
              <p>{position}</p>
            </div>

            <ul className="middle-bottom">
              <li>{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            </ul>
        </div>

        <div className="right">
            <p role="button" onClick={() => addFilter('role', role)}>{role}</p>
            <p role="button" onClick={() => addFilter('level', level)}>{level}</p>
            {languages && languages.map(lang => {
              return <p role="button" key={lang} onClick={() => addFilter('language', lang)}>{lang}</p>
            })}
            {tools && tools.map(tool => {
              return <p role="button" key={tool} onClick={() => addFilter('tool', tool)}>{tool}</p>
            })}
        </div>
    </div>
  )
}
