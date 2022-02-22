import styled from 'styled-components'
import { space, layout, flexbox, SpaceProps, LayoutProps, FlexboxProps } from 'styled-system'

type Props = SpaceProps & LayoutProps & FlexboxProps;

const StyledBox = styled.div<Props>`
    ${space}
    ${layout}
    ${flexbox}
`;

export const Box = StyledBox;