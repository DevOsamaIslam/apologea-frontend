import { TBaseRow } from '@lib/types'
import { z } from 'zod'

export const GallerySchema = z.object({
  userId: z.string(),
  url: z.string(),
})

export type TGalleryItem = TBaseRow<z.infer<typeof GallerySchema>>

export const CreateGalleryItemSchema = z.object({
  files: z.array(z.instanceof(File)),
})

export type TCreateGalleryItemPayload = z.infer<typeof CreateGalleryItemSchema>
