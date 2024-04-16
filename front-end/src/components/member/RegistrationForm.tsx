import { useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from '#root/components/Button';
import ButtonGroupWrapper from '#root/components/ButtonGroupWrapper';
import FormFieldGroupWrapper from '#root/components/form/FormFieldGroupWrapper';
import FormWrapper from '#root/components/form/FormWrapper';
import SelectField from '#root/components/form/SelectField';
import TextField from '#root/components/form/TextField';
import { RegisterArgs, Section } from '#root/types';
import { useLocalizedText } from '#root/utils/intl';

import CheckboxField from '../form/CheckboxField';

export default function RegistrationForm({
  sections,
  onSuccess,
  logInHref = '/member',
}: {
  logInHref?: string;
  onSuccess?(): void;
  sections: Section[];
}) {
  const validationSchema = yup.object<RegisterArgs>().shape({
    email: yup
      .string()
      .required(useLocalizedText('En e-post måste anges.'))
      .email(useLocalizedText('E-posten är inte i giltigt format.')),
    password: yup
      .string()
      .required(useLocalizedText('Ett lösenord måste anges.'))
      .min(8, useLocalizedText('Lösenordet måste vara minst 8 tecken långt.'))
      .matches(/^(?!^\d+$)^.+$/, useLocalizedText('Lösenordet får inte enbart bestå av siffror.')),
    password_confirmation: yup
      .string()
      .required(useLocalizedText('Lösenordet måste bekräftas.'))
      .oneOf([yup.ref('password'), null], useLocalizedText('Lösenordsbekräftelsen är inte giltig.')),
    person_number: yup
      .string()
      .required(useLocalizedText('Du måste ange ditt personnummer.'))
      .matches(/^\d{6}(?:\d{2})?[-\s]?\d{4}/, useLocalizedText('Personnumret är inte i giltigt format.')),
    phone_number: yup
      .string()
      .required(useLocalizedText('Du måste ange ditt telefonnummer.'))
      .matches(
        /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/,
        useLocalizedText('Telefonnumret är inte i giltigt format.'),
      ),
    privacy_policy_accepted: yup.boolean().isTrue(useLocalizedText('Du måste acceptera integritetspolicyn.')),
    section: yup
      .number()
      .integer()
      .positive()
      .oneOf(sections.map((section) => section.id)),
    username: yup
      .string()
      .required(useLocalizedText('Ett användarnamn måste anges.'))
      .min(4, useLocalizedText('Användarnamnet måste vara minst 4 tecken långt.'))
      .max(150, useLocalizedText('Användarnamnet får vara högst 150 tecken långt.'))
      .matches(
        /^[\w.@+-]+\Z/,
        useLocalizedText('Användarnamnet får bara innehålla engelska bokstäver, siffror och tecknen @.+-_.'),
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<RegisterArgs>>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = useCallback((args: Partial<RegisterArgs>) => {}, []);

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormFieldGroupWrapper>
        <TextField
          {...register('person_number')}
          invalid={!!errors.person_number}
          label={useLocalizedText('Personnummer')}
        />
        <TextField
          {...register('phone_number')}
          invalid={!!errors.phone_number}
          label={useLocalizedText('Telefonnummer')}
        />
      </FormFieldGroupWrapper>
      <FormFieldGroupWrapper>
        <TextField {...register('email')} invalid={!!errors.email} label={useLocalizedText('E-post')} />
        <TextField
          {...register('username')}
          invalid={!!errors.username}
          label={useLocalizedText('Användarnamn')}
        />
      </FormFieldGroupWrapper>

      <SelectField
        {...register('section')}
        invalid={!!errors.section}
        options={sections.map((section) => [section.name, String(section.id)])}
        label={useLocalizedText('Sektion')}
      />

      <CheckboxField
        {...register('privacy_policy_accepted')}
        label={useLocalizedText(
          'Jag accepterar att mina uppgifter sparas i enlighet med UTNs integritetspolicy',
        )}
      />

      <ButtonGroupWrapper>
        <Button inputType="submit">{useLocalizedText('Bli medlem')}</Button>
        <Button href={logInHref}>{useLocalizedText('Logga in')}</Button>
      </ButtonGroupWrapper>
    </FormWrapper>
  );
}
