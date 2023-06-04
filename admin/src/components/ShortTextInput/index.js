import React from 'react';
import { Field, FieldError, FieldHint, FieldLabel, Flex } from '@strapi/design-system';
import Input from './Input';

const ShortTextInput = (props) => {
  const { name, labelAction, required, intlLabel, error, description, onChange, value } = props;

  return (
    <Field name={name} id={name} error={error} hint={description && description.id}>
      <Flex direction="column" alignItems="flex-start" gap={1}>
        <FieldLabel action={labelAction} required={required}>
          {intlLabel.id}
        </FieldLabel>
        <Input name={name} onChange={onChange} value={value} />
        <FieldHint />
        <FieldError />
      </Flex>
    </Field>
  );
};

export default ShortTextInput;
