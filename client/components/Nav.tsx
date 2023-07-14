import { useEffect, useState } from 'react';
import {Link } from 'react-router-dom'

function Nav() {
  const [path, setPath] = useState('')

  function handleNav(input: string){
    setPath(input)
  }

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [path]);

  return (
      <nav className="my-14 ">
        <ul className="flex flex-col gap-4">
          <Link to={"#about"} onClick={() => handleNav("#about")}>
            <li>-- About</li>
          </Link>
          <li><Link to={"#projects"} onClick={() => handleNav("#projects")}>-- Projects</Link></li>
        </ul>
      </nav>
  )
}

export default Nav
