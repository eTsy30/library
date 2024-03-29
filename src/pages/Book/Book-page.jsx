import { useMemo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  Container,
  Content,
  RaytingContainer,
  RaytingTitle,
  RaytingWrapper,
  WrapperHead,
  Wrapper,
} from './Book-page-style'

import { Error } from 'components/Alert-error'
import { BookInformation } from 'components/Book-information/Book-information'
import { BookPresent } from 'components/Book-present/Book-present'
import { BookReviews } from 'components/Book-reviews/Book-reviews'
import { ErrorFly } from 'components/ErrorFly/ErrorFly'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header'
import { Spiner } from 'components/Loader-spiner'
import { PathComponent } from 'components/Path-component/Path-component'
import { StarReiting } from 'components/Star-reiting'
import { getOneBook } from 'redux/getOneBook/getOneBook'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { books } from 'test/categorii'

export const BookPage = () => {
  const { bookId } = useParams()
  const dispach = useAppDispatch()
  const { book, isError } = useAppSelector((state) => state.getOneBookReduser)
  const bookInformation = useMemo(() => books.find((book) => book.id === bookId), [bookId])
  useEffect(() => {
    dispach(getOneBook(bookId))
  }, [dispach])

  return (
    <>
      {book ? (
        <Container data-test-id='card'>
          <Wrapper>
            <WrapperHead>
              {isError ? <Error /> : ''}
              <ErrorFly />
              <Header imgAvatar='https://avatars.mds.yandex.net/i?id=2fd47a896e5c07a593a1521c677d9d73f43c45fa-5870396-images-thumbs&n=13' />
            </WrapperHead>
            <div className='qwe'>
              <PathComponent
                categiria={book?.attributes?.categories.data[0].attributes.name}
                title={book?.attributes?.title}
                path={book?.attributes?.categories.data[0].attributes.path}
              />
              <Content>
                <BookPresent
                  image={book?.attributes?.image.data}
                  description={book?.attributes?.description}
                  autor={book?.attributes?.authors}
                  title={book?.attributes?.title}
                />
                <RaytingWrapper>
                  <RaytingTitle>Рейтинг</RaytingTitle>
                  <RaytingContainer>
                    <StarReiting rating={book?.attributes?.rating} />
                  </RaytingContainer>
                </RaytingWrapper>
                <BookInformation information={book?.attributes} />
                <BookReviews bookID={bookId} />
              </Content>
            </div>
          </Wrapper>
          <WrapperHead>
            <Footer />
          </WrapperHead>
        </Container>
      ) : (
        <Spiner />
      )}
    </>
  )
}
