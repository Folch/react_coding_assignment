import styled from 'styled-components'
import { space, color, SpaceProps, ColorProps, LayoutProps, layout } from 'styled-system'

type Props = SpaceProps & ColorProps & LayoutProps;

const StyledTextarea = styled.textarea<Props>`
    ${space}
    ${color}
    ${layout}
`;

export const Textarea = StyledTextarea;