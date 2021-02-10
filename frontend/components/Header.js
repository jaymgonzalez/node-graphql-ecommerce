import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'

const Logo = styled.h1`
  background: red;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  position: relative;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
`

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
  }
`

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>search</p>
      </div>
      <Nav />
    </HeaderStyles>
  )
}
