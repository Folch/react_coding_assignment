import React, { FC } from "react";
import { FieldErrors, RegisterOptions } from "react-hook-form";
import { Paper } from "../../UI/Paper/Paper";
import { Typography } from "../../UI/Typography/Typography";
import { FormControl } from "./FormControl/FormControl";

export type FormControlProps = {
    register: (args: RegisterOptions) => any;
    errors: FieldErrors;
}

type Props = {
    section: ReactTest.Section;
    hidden: boolean;
} & FormControlProps;

export const FormSection: FC<Props> = ({ section, hidden, children, register, errors }) => {
    return (
        <Paper display={hidden ? null : "flex"} flexDirection="column" p="3" m="2" backgroundColor="white" hidden={hidden}>
            <Typography as="h2">{section.title}</Typography>
            {section.content.map(content => <FormControl key={content.id} errors={errors} data={content} register={register} />)}

            {children}
        </Paper>
    );
};