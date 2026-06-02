import { createContext, useContext, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const Ctx = createContext(null)

export function TransitionProvider({ children }) {
  const [active, setActive] = useState(false)
  const navigate = useNavigate()

  const go = useCallback(
    (path) => {
      if (active) return
      setActive(true)
      setTimeout(() => {
        navigate(path)
        setTimeout(() => setActive(false), 400)
      }, 350)
    },
    [navigate, active]
  )

  return (
    <Ctx.Provider value={{ go }}>
      {children}
      <div className={`pg-overlay${active ? ' pg-overlay--on' : ''}`} />
    </Ctx.Provider>
  )
}

export const usePageTransition = () => useContext(Ctx)
