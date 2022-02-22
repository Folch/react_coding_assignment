import styled from 'styled-components'
import { space, typography, color, TypographyProps, ColorProps, SpaceProps, BorderRadiusProps, borders } from 'styled-system'

type Props = SpaceProps & ColorProps & TypographyProps& BorderRadiusProps;


const StyledTypography = styled.p<Props>`
    ${space}
    ${color}
    ${typography}
    ${borders}
`;

export const Typography = StyledTypography;
