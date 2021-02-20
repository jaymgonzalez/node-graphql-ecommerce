import Form from './styles/Form'
import useForm from '../lib/useForm'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { CURRENT_USER_QUERY } from './User'
import Error from './ErrorMessage'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    name: '',
  })

  const [signUp, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  })

  async function handleSubmit(e) {
    e.preventDefault()
    await signUp().catch(console.error)
    resetForm()
  }

  // const error =
  //   data?.authenticateUserWithPassword.__typename ===
  //   'UserAuthenticationWithPasswordFailure'
  //     ? data?.authenticateUserWithPassword
  //     : undefined

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Up for an Account</h2>
      <Error error={error} />
      <fieldset>
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email} - Please go ahead and Sign
            In!
          </p>
        )}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          autoComplete="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          autoComplete="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up!</button>
      </fieldset>
    </Form>
  )
}
