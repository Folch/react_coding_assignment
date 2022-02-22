import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Box } from "../UI/Box/Box";

import { Button } from "../UI/Button/Button";
import { Typography } from "../UI/Typography/Typography";
import { FormSection } from "./FormSection/FormSection";

type Props = {
    sections: ReactTest.Section[];
}

export const Form: FC<Props> = ({ sections }) => {
    const [step, setStep] = useState(0);
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (data: unknown) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Typography as="span"
                backgroundColor="white"
                borderRadius="4px"
                marginLeft="2"
                padding="1"
            >Step {step + 1}</Typography>
            {sections.map((section, idx) => {
                const isFirstStep = idx === 0;
                const isLastStep = idx === sections.length - 1;
                return (<FormSection
                    errors={errors}
                    hidden={idx !== step}
                    key={section.id}
                    section={section}
                    register={register}
                >
                    {Object.keys(errors).length ? <Typography color="red" marginLeft="2">Check all the errors</Typography> : null}

                    <Box display="flex" justifyContent="center" marginY="3">

                        {!isFirstStep && <Button
                            marginRight="4"
                            type="button"
                            borderRadius="4px"
                            variant="secondary"
                            width="100px"
                            onClick={() => setStep(idx - 1)}>
                            Previous
                    </Button>}
                        <Button
                            type={isLastStep ? 'submit' : 'button'}
                            width="100px"
                            borderRadius="4px"
                            variant={isLastStep ? 'primary' : 'secondary'}
                            {...!isLastStep && { onClick: () => setStep(idx + 1) }}>
                            {isLastStep ? 'Submit' : 'Next'}
                        </Button>
                    </Box>
                </FormSection>)
            })}
        </form>
    );
};