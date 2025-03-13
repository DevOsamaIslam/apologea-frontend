import { z } from 'zod'

export const TAG_TYPES = {
  articles: 'articles',
  article: 'article',
  gallery: 'gallery',
  user: 'user',
} as const

export const REDUCER_PATHS = {
  api: 'api',
} as const

export const Operators = z.enum([
  'equals',
  'not-equal',
  'greater',
  'less-than',
  'greater-equal',
  'less-equal',
  'null',
  'not-null',
  'between',
  'contains',
])
