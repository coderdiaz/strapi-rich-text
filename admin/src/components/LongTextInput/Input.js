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

  const handleOnPaste = (e) => {
    e.preventDefault()
    const plainText = e.clipboardData.getData('text/plain')
    const html = e.clipboardData.getData('text/html')

    update(sanitizer(html || plainText))
  }

  const handleOnChange = (e) => {
    update(sanitizer(e.target.value))
  }

  return (
    <InputBox>
      <InputWrapper>
        <Editable
          inputMode="text"
          html={sanitizer(value)}
          onPaste={handleOnPaste}
          onChange={handleOnChange}
        />
        <StyledToolbar />
      </InputWrapper>
    </InputBox>
  )
}

const StyledToolbar = styled(Toolbar)``

const InputBox = styled(Box)`
  flex: 1;
  width: 100%;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral0};
  padding: 16px;
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
  outline: 0 none;
  min-height: 68px;
  max-height: 68px;
  overflow-y: scroll;
  margin-bottom: 16px;

  b,
  strong {
    font-weight: 600;
  }
`

export default Input
