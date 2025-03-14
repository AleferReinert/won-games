import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import TextField from 'components/TextField/TextField'
import * as S from 'pages/account/profile/Profile.styles'
import type { ReactElement } from 'react'
import AccountTemplate from 'templates/Account/Account'

const ProfilePage = () => {
  return (
    <Box>
      <S.Wrapper>
        <S.Form>
          <TextField name='name' label='Name' initialValue='John Cage' />
          <TextField
            type='email'
            name='email'
            label='E-mail'
            initialValue='john.cage@gmail.com'
            disabled
          />
          <TextField
            type='password'
            name='password'
            label='Password'
            placeholder='Type your password'
          />
          <TextField
            type='password'
            name='new-password'
            label='New password'
            placeholder='New password'
          />
        </S.Form>
        <S.Footer>
          <Button>Save</Button>
        </S.Footer>
      </S.Wrapper>
    </Box>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <AccountTemplate activeLink='My profile'>{page}</AccountTemplate>
}

export default ProfilePage
