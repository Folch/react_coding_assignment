import styled from 'styled-components'
import { space, color, SpaceProps, ColorProps, FlexboxProps, flexbox, layout, LayoutProps } from 'styled-system'

type Props = SpaceProps & LayoutProps & ColorProps & FlexboxProps;

const StyledPaper = styled.div<Props>`
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    background-color: white;
    ${space}
    ${color}
    ${layout}
    ${flexbox}
`;

export const Paper = StyledPaper;