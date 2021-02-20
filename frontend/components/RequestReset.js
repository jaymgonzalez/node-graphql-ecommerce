import Form from './styles/Form'
import useForm from '../lib/useForm'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import Error from './ErrorMessage'

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  })

  const [requestReset, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    }
  )

  async function handleSubmit(e) {
    e.preventDefault()
    await requestReset().catch(console.error)
    resetForm()
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Request a password reset</h2>
      <Error error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for a link</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          autoComplete="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <button type="submit">Request Reset</button>
      </fieldset>
    </Form>
  )
}
