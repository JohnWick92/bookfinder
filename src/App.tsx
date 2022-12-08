import { globalCss } from '@stitches/react'
import { useState } from 'react'
import {
  ResultContent,
  SearchButton,
  SearchDiv,
  SearchInput,
  Wrapper,
} from './styles/app'
import api from './services/api'
import BookPreview from './components/BookPreview'

export interface basicBook {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: {
    title: string
    authors: string[]
  }
}

function App() {
  const [inputBook, setInputBook] = useState('')
  const [listBook, setListBook] = useState<[]>()
  const globalStyles = globalCss({
    html: {
      color: '#D9D9D9',
      fontSize: 18,
    },
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: '#292727',
    },
  })
  globalStyles()

  async function findThem() {
    const { data } = await api.get('volumes?q=' + inputBook)
    const response = data.items
    return response
  }

  return (
    <Wrapper>
      <h1>Find your Book!</h1>
      <SearchDiv>
        <SearchInput
          type='text'
          id='search'
          value={inputBook}
          onChange={(e) => setInputBook(e.target.value)}
          placeholder='type book title, author...'
        />
        <SearchButton
          onClick={async () => {
            setListBook(await findThem())
          }}
        >
          Search
        </SearchButton>
      </SearchDiv>
      <ResultContent>
        {listBook &&
          listBook.map((book: basicBook) => (
            <BookPreview book={book} key={book.id} />
          ))}
      </ResultContent>
    </Wrapper>
  )
}

export default App
