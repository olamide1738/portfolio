import { useState, useEffect } from 'react'

export function useGitHubContributions(username) {
  const [contributions, setContributions] = useState(null)
  const [total, setTotal] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => r.json())
      .then((json) => {
        setContributions(json.contributions)
        const year = new Date().getFullYear()
        setTotal(json.total?.[year] ?? json.total?.lastYear ?? 0)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  return { contributions, total, loading }
}
