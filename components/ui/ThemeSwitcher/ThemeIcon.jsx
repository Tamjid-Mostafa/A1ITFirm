import Moon from "@/components/layout/icons/Moon"
import Sun from "@/components/layout/icons/Sun"
import System from "@/components/layout/icons/System"




const ThemeIcon = ({ theme, ...props }) => {
  switch (theme) {
    case 'light':
      return <Sun {...props} />

    case 'dark':
      return <Moon {...props} />

    default:
      return <System {...props} />
  }
}

export default ThemeIcon
