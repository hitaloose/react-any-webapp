/* eslint-disable @typescript-eslint/no-explicit-any */

import { InputHTMLAttributes, useId } from "react";
import { Control, Controller } from "react-hook-form";

type Props = {
  label: string;
  control?: Control<any, any>;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
  const { label, control, error, className, ...inputProps } = props;

  const id = useId();

  if (control && inputProps.name) {
    return (
      <Controller
        name={inputProps.name}
        control={control}
        render={({ field, fieldState }) => (
          <div className="flex flex-col">
            <label className="text-xs" htmlFor={id}>
              {label}
            </label>
            <input
              className={`border border-cyan-900 rounded p-2 ${
                className || ""
              }`}
              {...inputProps}
              {...field}
              id={id}
            />
            {!!fieldState.error && (
              <span className="text-xs text-red-700">
                {fieldState.error.message || " "}
              </span>
            )}
          </div>
        )}
      />
    );
  }

  return (
    <div className="flex flex-col">
      <label className="text-xs" htmlFor={id}>
        {label}
      </label>
      <input
        className={`border border-cyan-900 rounded p-2 ${className || ""}`}
        {...inputProps}
        id={id}
      />
      {!!error && <span className="text-xs text-red-700">{error}</span>}
    </div>
  );
};
