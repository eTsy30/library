import styled from 'styled-components'

import { ReactComponent as Stroke } from 'assets/icon/Stroke.svg'

import { IUlTitle, IStrokeButton } from 'types/isActive'
export const LiText = styled.li`
  &:not(&:last-child) {
    margin-bottom: 16px;
  }
`
export const UlTitle = styled.ul<IUlTitle>`
  width: 100%;
  display: ${(props) => (props.$isOpenBook ? 'block' : 'none')};
  margin: 16px 0px 42px 20px !important;

  & > ${LiText} {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 320px) {
    width: initial;
    margin: 16px 0px 42px 0px !important;
  }
`
export const UlLink = styled.ul`
  & > li {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  @media screen and (max-width: 320px) {
    width: 90%;
  }
`
export const Navigate = styled.nav`
  padding-right: 3px;
  width: 279px;
  @media screen and (max-width: 320px) {
    width: auto;
  }
`

export const StrokeButton = styled(Stroke)<IStrokeButton>`
  transition: all 500ms ease-in-out;
  height: 18px;
  width: 18px;
  path {
    fill: ${(props) => (props.$isActive ? '#F83600' : 'black')};
  }
  transform: ${(props) => (props.$isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
`

export const SpanText = styled.span`
  padding-left: 6px;
`
export const TitleWrapper = styled.li<IStrokeButton>`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${(props) => (props.$isOpen ? '0px' : '42px')};
`
