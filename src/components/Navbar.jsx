import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Flex, Box, Spacer } from "@chakra-ui/react"


const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li style={{listStyleType: 'none'}} className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

const Navbar = () => {
  return (
    <nav className="nav">
      <Box bg='#3d5c7b' fontSize='xl' color='white'  p={4}>
        <Flex direction="row">
          <Link to="/" className="site-title">
            Site Name
          </Link>

          <Spacer />
          <CustomLink style={{marginRight: '2em'}} to="/signin">Sig In</CustomLink>
          <CustomLink to="/signup">Sig Up</CustomLink>
        </Flex>
      </Box>
    </nav>
  )
}

export default Navbar

