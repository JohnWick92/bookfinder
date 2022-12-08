import { BookCard, Img } from '../styles/Book'
import { useEffect, useState } from 'react'
import { basicBook } from '../App'
import api from '../services/api'

type bookProps = {
  book: basicBook
}

export default function BookPreview({ book }: bookProps) {
  const [bookAdvanced, setBookkAdvanced] = useState<any>()
  async function advancedSearch() {
    const { data } = await api.get('volumes/' + book.id + '?projection=full')
    return data
  }

  useEffect(() => {
    const fetchingDate = async () => {
      setBookkAdvanced(await advancedSearch())
    }
    fetchingDate()
  }, [])

  return (
    <div>
      {bookAdvanced && (
        <a
          target='blank'
          href={bookAdvanced.volumeInfo.infoLink}
          style={{ textDecoration: 'none' }}
        >
          <BookCard>
            <Img>
              <img src={bookAdvanced.volumeInfo.imageLinks.thumbnail} />
            </Img>
            <div>
              <p>Title: {bookAdvanced.volumeInfo.title}</p>
              <p>
                Author&#40;s&#41;:{' '}
                {bookAdvanced.volumeInfo.authors
                  ? bookAdvanced.volumeInfo.authors
                  : 'Not Provided'}
              </p>
              <p>
                Publisher:{' '}
                {bookAdvanced.volumeInfo.publisher
                  ? bookAdvanced.volumeInfo.publisher
                  : 'Not Provided'}
              </p>
              <p>
                Published:{' '}
                {bookAdvanced.volumeInfo.publishedDate
                  ? bookAdvanced.volumeInfo.publishedDate
                  : 'Not Provided'}
              </p>
            </div>
          </BookCard>
        </a>
      )}
    </div>
  )
}
