import { zodResolver } from '@hookform/resolvers/zod'
import { useRegisterUserMutation } from '@modules/users/control/api'
import {
  RegistrationSchema,
  TRegistrationPayload,
} from '@modules/users/control/types'
import { Typography } from '@mui/material'
import PageContainer from '@shared/PageContainer'
import PageTitle from '@shared/PageTitle'
import { CustomForm } from 'mui-custom-form'
import { IFieldGroup } from 'mui-custom-form/dist/types'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

const RegisterPage: FC = () => {
  const [registerFn] = useRegisterUserMutation()

  const formControl = useForm({
    resolver: zodResolver(RegistrationSchema),
  })

  const handleSubmit = formControl.handleSubmit(data => {
    registerFn(data)
  })

  const fields: IFieldGroup<TRegistrationPayload> = [
    [
      {
        label: 'Username',
        name: 'username',
        required: true,
        type: 'text',
      },
    ],
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
      <PageTitle>Register</PageTitle>
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      <CustomForm
        fieldsGroups={fields}
        onSubmit={[handleSubmit]}
        formControl={formControl}
        submitButton={{ fullWidth: true }}
      />
      <Typography textAlign={'center'}>
        Already have account? <Link to="/auth/login">Login</Link>
      </Typography>
    </PageContainer>
  )
}

export default RegisterPage
