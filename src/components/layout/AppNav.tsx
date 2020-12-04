import Logo from '~/static/logo.png'

type linkObjectTypes = {
  href: string
  label: string
}

const AppNav: React.FC<{ navbarLinks: linkObjectTypes[] }> = ({ navbarLinks }) => {
  return <div>Nav</div>
}

export default AppNav
