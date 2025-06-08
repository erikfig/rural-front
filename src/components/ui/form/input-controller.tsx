import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import type { Control, FieldErrors, FieldValues, Path, PathValue } from 'react-hook-form';
import TextInput from './textinput';
import TextArea from './textarea';

interface InputControllerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  defaultValue?: PathValue<T, Path<T>>;
  type: HTMLInputElement['type'];
  errors: FieldErrors<T>;
  placeholder?: string;
  label: string;
}

type RenderProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onBlur: () => void;
};

export const InputController = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  errors,
  type = 'text',
  placeholder,
  label,
}: InputControllerProps<T>) => {
  useEffect(() => {
    console.log(errors);
  }
, [errors]);
  const render = (field: RenderProps) => {
    if (type === 'textarea') return (
      <TextArea
        name={name}
        label={label}
        {...field}
        placeholder={placeholder}
      />
    )

    return (
      <TextInput
        label={ label }
        name={ name }
        { ...field }
        placeholder={ placeholder }
        type={ type }
      />
    )
  }

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => render(field)}
      />
      {errors[name] && <p className="mt-2 text-red-500">{errors[name].message as string}</p>}
    </div>
  );
};
