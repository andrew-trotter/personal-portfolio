import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [path, setPath] = useState('')

  function handleNav(input: string) {
    setPath(input)
  }

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1,
    )

    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [path])

  return (
    <nav className="my-14 ">
      <ul className="flex flex-col gap-4">
        <li>
          <Link to={'#about'} onClick={() => handleNav('#about')}>
            -- About
          </Link>
        </li>
        <li>
          <Link to={'#experiences'} onClick={() => handleNav('#experiences')}>
            -- Experiences
          </Link>
        </li>
        <li>
          <Link to={'#projects'} onClick={() => handleNav('#projects')}>
            -- Projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
