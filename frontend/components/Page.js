import Header from './Header'

export default function Page(props) {
  return (
    <>
      <Header />
      <div>this is my page</div>
      {props.children}
    </>
  )
}
