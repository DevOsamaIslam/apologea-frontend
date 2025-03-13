import { z } from 'zod'

export const UserSchema = z.object({
  _id: z.string(),
  username: z.string({ message: 'Username is required' }),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z
    .string({ message: 'Email is required' })
    .email({ message: 'Please enter an email' }),
  password: z
    .string({ message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters long' })
    .regex(/[a-z]/, {
      message: 'Password must include at least one lowercase letter',
    })
    .regex(/[A-Z]/, {
      message: 'Password must include at least one uppercase letter',
    })
    .regex(/[0-9]/, { message: 'Password must include at least one number' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Password must include at least one special character',
    }),
  photo: z.string().optional(),
  articleIds: z.array(z.string()),
  bio: z.string().optional(),
})
export type TUser = z.infer<typeof UserSchema>

export const LoginSchema = UserSchema.pick({ email: true, password: true })
export type TLoginPayload = z.infer<typeof LoginSchema>

export const RegistrationSchema = UserSchema.pick({
  username: true,
  email: true,
  password: true,
})
export type TRegistrationPayload = z.infer<typeof RegistrationSchema>

export const UpdateUserSchema = UserSchema.pick({
  username: true,
  firstName: true,
  lastName: true,
  password: true,
  photo: true,
  bio: true,
})
  .partial()
  .required({ username: true })
export type TUpdateUserPayload = z.infer<typeof UpdateUserSchema>

export interface IUserState {
  user: TUser | null
  isAuthenticated: boolean
  status: 'idle' | 'loading' | 'success' | 'fail'
}
