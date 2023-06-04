import * as React from 'react'
import { Box } from '@strapi/design-system'
import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'
import Toolbar from '../Toolbar'
import { sanitizer } from '../../utils/sanitizer'

const Input = ({ onChange, value, name }) => {
  const update = (value) => {
    onChange({ target: { name, value } })
  }

  const handleOnKeyDown = (e) => {
    // Prevents the user from inserting line breaks
    if (e.keyCode === 13) e.preventDefault()
  }

  const handleOnPaste = (e) => {
    e.preventDefault()
    const plainText = e.clipboardData.getData('text/plain')
    const html = e.clipboardData.getData('text/html')

    update(sanitizer(html || plainText))
  }

  const handleOnChange = (e) => {
    update(sanitizer(e.target.value))
  }

  const onHandleClearFormat = () => {
    const tempElement = document.createElement('div')
    tempElement.innerHTML = value
    const plainText = tempElement.innerText
    update(sanitizer(plainText))
  }

  return (
    <InputBox>
      <InputWrapper>
        <Editable
          inputMode="text"
          html={sanitizer(value)}
          onKeyDown={handleOnKeyDown}
          onPaste={handleOnPaste}
          onChange={handleOnChange}
        />
        <StyledToolbar onHandleClearFormat={onHandleClearFormat} />
      </InputWrapper>
    </InputBox>
  )
}

const StyledToolbar = styled(Toolbar)`
  position: absolute;
  top: 7px;
  right: 8px;
`

const InputBox = styled(Box)`
  flex: 1;
  width: 100%;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral0};
  padding: 0.65625rem 100px 0.65625rem 16px;
  color: ${({ theme }) => theme.colors.neutral800};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary600};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary600};
  }
`

const InputWrapper = styled.div`
  overflow: hidden;
  flex: 1;
  width: 100%;
`

const Editable = styled(ContentEditable)`
  overflow-wrap: normal;
  outline: 0 none;
  white-space: nowrap;

  b,
  strong {
    font-weight: 600;
  }
`

export default Input
