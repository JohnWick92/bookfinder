import { styled } from '@stitches/react'

export const Wrapper = styled('div', {
  paddingTop: '30px',
  textAlign: 'center',
})

export const SearchDiv = styled('div', {
  margin: 'auto',
  width: '440px',
})

export const SearchInput = styled('input', {
  height: '30px',
  borderRadius: '8px',
  textAlign: 'center',
})

export const SearchButton = styled('button', {
  margin: '15px',
  height: '30px',
})

export const ResultContent = styled('div', {
  display: 'grid',
  marginTop: '100px',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '20px',
})
