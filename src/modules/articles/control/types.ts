import { Block } from '@blocknote/core'
import { UserSchema } from '@modules/users/control/types'
import { z } from 'zod'

// Define Zod schema for an article
export const ArticleSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(100),
  content: z.string().min(10),
  slug: z.string(),
  authorId: z.string(),
  author: UserSchema.optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean(),
  createdAt: z.date(),
})

export type TArticle = z.infer<typeof ArticleSchema>

export const createArticleSchema = ArticleSchema.pick({
  title: true,
  content: true,
  tags: true,
  published: true,
})
export const updateArticleSchema = ArticleSchema.partial().required({
  id: true,
})

// Infer TypeScript types from Zod
export type TCreateArticle = z.infer<typeof createArticleSchema>
export type TUpdateArticle = z.infer<typeof updateArticleSchema>

export interface IBlock {
  id: string
  type: Block['type']
  props: Props
  content: Content[]
  children: any[]
}

interface Content {
  type: Block['type']
  text: string
}

interface Props {
  textColor: string
  backgroundColor: string
  textAlignment: string
  level: number
}
