import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const Main = () => {
  return (
    <>
      <h1>main page</h1>
      <Button>test button</Button>
    </>
  );
}

export default Main
