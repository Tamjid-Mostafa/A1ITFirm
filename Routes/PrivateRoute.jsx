import { useUI } from "@components/ui/context"
import LoadingDots from "@components/ui/LoadingDots"
import { AuthContext } from "context/AuthProvider"
import { useRouter } from "next/router"
import { useContext } from "react"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const router = useRouter()
  const { openModal } = useUI();
  if (loading) {
    return (
      <LoadingDots/>
    )
  }

  if (!user && !user?.uid) {
    router.replace('/')
    openModal()
  }
  return children
}

export default PrivateRoute