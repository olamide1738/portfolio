import { useEffect } from 'react'

// ← Update this to your exact Vercel URL (or custom domain) before going live
export const SITE_URL = 'https://olamideowolabi.vercel.app'

const DEFAULT_TITLE = 'Olamide Owolabi — Frontend & Mobile Developer'
const DEFAULT_DESCRIPTION =
  'Frontend & mobile developer with 5 years of experience building clean, polished digital products for startups and businesses. Based in Lagos, Nigeria.'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

function setMeta(selector, attr, value) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [attrName, attrValue] = selector.match(/\[([^=]+)="([^"]+)"\]/).slice(1)
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * useSEO — updates <title>, meta description, OG, and Twitter tags for the current page.
 *
 * @param {object} opts
 * @param {string} [opts.title]       Page-level title (appended with " — Olamide Owolabi")
 * @param {string} [opts.description] Page-level description
 * @param {string} [opts.path]        URL path, e.g. "/work/arabella" (default: "/")
 * @param {string} [opts.image]       Absolute URL to an OG image (defaults to og-image.png)
 */
export function useSEO({ title, description, path = '/', image } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Olamide Owolabi` : DEFAULT_TITLE
    const desc = description || DEFAULT_DESCRIPTION
    const url = `${SITE_URL}${path}`
    const img = image || DEFAULT_IMAGE

    document.title = fullTitle

    setMeta('meta[name="description"]', 'content', desc)

    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', desc)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:image"]', 'content', img)

    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', desc)
    setMeta('meta[name="twitter:url"]', 'content', url)
    setMeta('meta[name="twitter:image"]', 'content', img)

    setLink('canonical', url)
  }, [title, description, path, image])
}
