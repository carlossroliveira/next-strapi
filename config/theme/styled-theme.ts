import { ITheme } from '@seidor/ds-marketing'
import baseStyled, {
  css as cssStyled,
  keyframes as keyframesStyled,
  ThemedCssFunction,
  ThemedStyledInterface
} from 'styled-components'

const styled = baseStyled as ThemedStyledInterface<ITheme>
export default styled

export const css = cssStyled as ThemedCssFunction<ITheme>

export const keyframes = keyframesStyled
