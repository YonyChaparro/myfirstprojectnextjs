import Link from "next/link"


const Navbar = () => {
  return (
    <div>
        <nav>
          <h1>Navbar</h1>
          <ul>
            <li>
              <Link href="nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="tienda">Tienda</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar