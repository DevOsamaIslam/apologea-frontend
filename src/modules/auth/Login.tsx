import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginUserMutation } from '@modules/users/control/api'
import { LoginSchema, TLoginPayload } from '@modules/users/control/types'
import { Box, Container, Typography } from '@mui/material'
import { CustomForm } from 'mui-custom-form'
import { IFieldGroup } from 'mui-custom-form/dist/types'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

const LoginPage: FC = () => {
  const [loginFn] = useLoginUserMutation()

  const formControl = useForm({
    resolver: zodResolver(LoginSchema),
  })

  const handleSubmit = formControl.handleSubmit((data) => {
    loginFn(data)
  })

  const fields: IFieldGroup<TLoginPayload> = [
    [
      {
        label: 'Email',
        name: 'email',
        required: true,
        type: 'text',
      },
    ],
    [
      {
        label: 'Password',
        name: 'password',
        type: 'password',
        required: true,
      },
    ],
  ]

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <CustomForm
          fieldsGroups={fields}
          onSubmit={[handleSubmit]}
          formControl={formControl}
        />
      </Box>
    </Container>
  )
}

export default LoginPage
