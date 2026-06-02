import { useState, useEffect } from 'react'

export function useGitHubStats(username) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((data) => {
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  return { stats, loading }
}
