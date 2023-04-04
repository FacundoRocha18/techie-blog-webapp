/* eslint-disable @typescript-eslint/ban-types */
import { StyledFieldset, StyledLabel, StyledInput } from 'components'
import { useThemeContext } from 'contexts/Theme/ThemeContext'

interface Props {
  text: string
  placeholder: string
  type: string
  name: string
  id: string
  htmlFor: string
  value: string
  handleOnChange: Function
}

export const RegisterField = ({
  text,
  placeholder,
  type,
  name,
  id,
  htmlFor,
  value,
  handleOnChange,
}: Props) => {
  const { theme } = useThemeContext()

  return (
    <StyledFieldset>
      <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>
      <StyledInput
        theme={theme}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(value) => handleOnChange(value)}
        placeholder={placeholder}
      />
    </StyledFieldset>
  )
}
