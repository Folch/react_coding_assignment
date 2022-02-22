import styled from 'styled-components'
import { space, color, layout, SpaceProps, ColorProps, LayoutProps } from 'styled-system'

type Props = SpaceProps & ColorProps & LayoutProps;

const StyledInput = styled.input<Props>`
    ${space}
    ${color}
    ${layout}
`;

export const Input = StyledInput;