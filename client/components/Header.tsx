import Nav from "./Nav"

function Header() {
  return(
    <div className="sticky">
      <hgroup>
        <h1 className="text-5xl mb-2 font-bold">Andrew Trotter</h1>
        <h2 className="text-2xl font-medium mb-2">Full Stack Web Developer</h2>
      </hgroup>
      <p className="text-gray-400 mr-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et lobortis eros.</p>
      <Nav />
    </div>
  )
}

export default Header