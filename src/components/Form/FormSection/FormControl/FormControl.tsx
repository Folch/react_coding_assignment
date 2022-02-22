import React, { FC, forwardRef, Fragment } from "react";

import { Box } from "../../../UI/Box/Box";
import { Input } from "../../../UI/Input/Input";
import { Select } from "../../../UI/Select/Select";
import { Textarea } from "../../../UI/Textarea/Textarea";
import { Typography } from "../../../UI/Typography/Typography";
import { FormControlProps } from "../FormSection";

type Props = {
    data: ReactTest.Element;
} & FormControlProps;

export const FormControl: FC<Props> = ({ data: {
    id, metadata, question_text, type
}, register, errors }) => {
    let FormElement: FC<any> = Fragment;
    let formElementProps: Record<string, any> = { ...metadata, name: id, type: metadata.format || 'text' };
    switch (type) {
        case "boolean":
            FormElement = Input;
            formElementProps = { ...formElementProps, type: 'checkbox' };
            break;
        case "multichoice":
            FormElement = forwardRef((props, ref) => (
                <Select {...props} ref={ref}>
                    {metadata.options?.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </Select>
            ));
            break;
        case "textarea":
            FormElement = Textarea;
            break;
        default:
            FormElement = Input;
    }

    return (
        <Box p="2">
            <Typography as={formElementProps.type === 'checkbox' ? 'span' : 'p'} paddingRight="3">{question_text}</Typography>

            <FormElement padding="1" width={formElementProps.type === 'checkbox' ? '' : '100%'} ref={register({
                required: metadata.required,
                pattern: metadata.pattern ? new RegExp(metadata.pattern) : undefined,
            })} {...formElementProps} />

            {errors[id]?.type === 'required' && <Typography color="red" marginTop="1">Required</Typography>}
            {errors[id]?.type === 'pattern' && <Typography color="red" marginTop="1">Invalid pattern</Typography>}
        </Box>
    );
};