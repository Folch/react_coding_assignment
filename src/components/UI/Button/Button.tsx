import styled from 'styled-components'
import { space, layout, borders, BorderRadiusProps, SpaceProps, LayoutProps } from 'styled-system'

type Props = SpaceProps & LayoutProps & BorderRadiusProps & { variant?: 'primary' | 'secondary' };

const StyledButton = styled.button<Props>`
    ${space}
    ${layout}
    ${borders}
    color: ${props => props.variant ? props.theme.buttons[props.variant].color : 'black'};
    background-color: ${props => props.variant ? props.theme.buttons[props.variant].bg : 'initial'};

`;


export const Button = StyledButton;