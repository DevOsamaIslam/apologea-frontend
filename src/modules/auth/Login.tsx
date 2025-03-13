import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginUserMutation } from '@modules/users/control/api'
import { LoginSchema, TLoginPayload } from '@modules/users/control/types'
import { Box, Container, Typography } from '@mui/material'
import PageContainer from '@shared/PageContainer'
import PageTitle from '@shared/PageTitle'
import { CustomForm } from 'mui-custom-form'
import { IFieldGroup } from 'mui-custom-form/dist/types'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

const LoginPage: FC = () => {
  const [loginFn] = useLoginUserMutation()

  const formControl = useForm({
    resolver: zodResolver(LoginSchema),
  })

  const handleSubmit = formControl.handleSubmit(data => {
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
    <PageContainer sx={{ pt: 2 }}>
      <PageTitle>Login</PageTitle>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <CustomForm
        fieldsGroups={fields}
        onSubmit={[handleSubmit]}
        formControl={formControl}
        submitButton={{ fullWidth: true }}
      />
      <Typography textAlign={'center'}>
        Don't have account? <Link to="/auth/register">Register</Link>
      </Typography>
    </PageContainer>
  )
}

export default LoginPage
