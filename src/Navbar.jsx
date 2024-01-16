// Navbar.jsx
import { Link, useNavigate, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink onClick={() => navigate('/')}>Home</CustomLink>
        <CustomLink onClick={() => navigate('/pricing')}>Pricing</CustomLink>
        <CustomLink onClick={() => navigate('/about')}>About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ onClick, children, ...props }) {
  return (
    <li>
      <span onClick={onClick} {...props}>
        {children}
      </span>
    </li>
  )
}