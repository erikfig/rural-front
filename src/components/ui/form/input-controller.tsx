import { Controller } from 'react-hook-form';
import type { Control, FieldErrors, FieldValues, Path, PathValue } from 'react-hook-form';
import TextInput from './textinput';
import TextArea from './textarea';
import { ErrorComponent } from './styles';
import SelectInput from './selectinput';

interface InputControllerProps<T extends FieldValues> {
  name: Path<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<T, any, T>;
  defaultValue?: PathValue<T, Path<T>>;
  type: HTMLInputElement['type'];
  errors: FieldErrors<T>;
  placeholder?: string;
  label: string;
  disabled?: boolean;
  options?: { value: string; label: string }[];
}

type RenderProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => void;
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
  disabled,
  options = [],
}: InputControllerProps<T>) => {
  const render = (field: RenderProps) => {
    if (type === 'textarea') return (
      <TextArea
        name={name}
        label={label}
        {...field}
        placeholder={placeholder}
      />
    )
    if (type === 'select') return (
      <SelectInput
        name={name}
        label={label}
        {...field}
        options={options}
      />
    )

    return (
      <TextInput
        label={ label }
        name={ name }
        { ...field }
        placeholder={ placeholder }
        type={ type }
        disabled={disabled}
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
      {errors[name] && <ErrorComponent>{errors[name].message as string}</ErrorComponent>}
    </div>
  );
};
