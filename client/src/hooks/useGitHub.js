import { useState, useEffect } from 'react'

const GITHUB_USERNAME = 'divyanshu-builds-ui'
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`

const styleMap = {
  default: { gradient: 'from-primary/20 to-accent/20', emoji: '📁' },
  javascript: { gradient: 'from-yellow-500/20 to-orange-500/20', emoji: '⚡' },
  html: { gradient: 'from-orange-500/20 to-red-500/20', emoji: '🌐' },
  css: { gradient: 'from-blue-500/20 to-cyan-500/20', emoji: '🎨' },
  python: { gradient: 'from-green-500/20 to-emerald-500/20', emoji: '🐍' },
  typescript: { gradient: 'from-blue-600/20 to-indigo-500/20', emoji: '💎' },
}

function getStyle(language) {
  const key = (language || '').toLowerCase()
  return styleMap[key] || styleMap.default
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('GitHub API limit reached')
        return res.json()
      })
      .then(data => {
        const formatted = data
          .filter(repo => !repo.fork)
          .map(repo => {
            const style = getStyle(repo.language)
            return {
              title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
              desc: repo.description || 'No description provided.',
              tech: [repo.language || 'Code', ...(repo.topics || []).slice(0, 3)].filter(Boolean),
              github: repo.html_url,
              live: repo.homepage || '#',
              gradient: style.gradient,
              emoji: style.emoji,
              stars: repo.stargazers_count,
              updated: repo.updated_at,
            }
          })
        setRepos(formatted)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { repos, loading, error }
}

export function useGitHubStats() {
  const [stats, setStats] = useState({ repos: 0, followers: 0 })

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
        })
      })
      .catch(() => {})
  }, [])

  return stats
}
