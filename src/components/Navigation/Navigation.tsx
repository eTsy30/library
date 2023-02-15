import { SetStateAction, MouseEventHandler, useEffect, useState } from 'react'

import { ButtonFilter, ButtonLinar, ButtonTablet, ImgSearch, LeftSide, RightSide, Wrapper } from './Navigation-style'

import { ReactComponent as BurgerIcon } from 'assets/icon/Burger.svg'

import { ReactComponent as Search } from 'assets/icon/Search.svg'
import { ReactComponent as TableIcon } from 'assets/icon/Table.svg'

import { SearchComponent } from 'components/Search/Search'
import { useWidth } from 'hooks/use-width'

export const Navigation = ({ onChange }: any) => {
  const [isActiveFilter, setActiveFilter] = useState(false)
  const [isActiveButton, setActiveButton] = useState(false)
  const [isActiveSearch, setActiveSearch] = useState(true)
  const width = useWidth()

  const handleChange: MouseEventHandler = () => {
    setActiveButton(!isActiveButton)
    onChange(isActiveButton)
  }
  const activeChange = (active: SetStateAction<boolean>) => {
    setActiveSearch(active)
  }

  return (
    <Wrapper>
      <LeftSide data-test-id='input-search'>
        {width <= 320 && isActiveSearch ? (
          <ImgSearch
            data-test-id='button-search-open'
            onClick={() => {
              setActiveSearch(!isActiveSearch)
            }}
          >
            <Search data-test-id='button-search-open' />
          </ImgSearch>
        ) : (
          <SearchComponent data-test-id='input-search' onChange={activeChange} isActiveSearch={isActiveSearch} />
        )}
        {width >= 320 || isActiveSearch ? (
          <ButtonFilter $isActive={isActiveFilter} onClick={() => setActiveFilter(!isActiveFilter)}>
            <span>По рейтингу</span>
          </ButtonFilter>
        ) : (
          ''
        )}
      </LeftSide>
      {isActiveSearch ? (
        <RightSide>
          <ButtonTablet $isActive={isActiveButton} data-test-id='button-menu-view-window' onClick={handleChange}>
            <TableIcon />
          </ButtonTablet>
          <ButtonLinar $isActive={isActiveButton} data-test-id='button-menu-view-list' onClick={handleChange}>
            <BurgerIcon />
          </ButtonLinar>
        </RightSide>
      ) : (
        ''
      )}
    </Wrapper>
  )
}
