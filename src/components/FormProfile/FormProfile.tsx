import Heading from 'components/Heading/Heading'
import * as S from './FormProfile.styles'
import TextField from 'components/TextField/TextField'
import Button from 'components/Button/Button'

const FormProfile = () => {
  return (
    <S.Wrapper>
      <Heading color='black' line='bottom'>
        My profile
      </Heading>
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
          name='password'
          label='New password'
          placeholder='New password'
        />
      </S.Form>
      <S.Footer>
        <Button>Save</Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default FormProfile
