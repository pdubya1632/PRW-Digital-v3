import type { FormProps } from 'remix-forms';
import { Form as RemixForm } from 'remix-forms'
import type { SomeZodObject } from 'zod'

// import Error from './error'
// import Errors from './errors'
import Field from './field'
import Input from './input'
import Label from './label'
// import Select from './select'
import SubmitButton from './submit-button'
// import Checkbox from './checkbox'
// import CheckboxWrapper from './checkbox-wrapper'
import TextArea from './text-area'

export default function Form<Schema extends SomeZodObject>(
  props: FormProps<Schema>,
) {
  return (
    <RemixForm<Schema>
    //   className=
      fieldComponent={/* your custom Field */}
      labelComponent={/* your custom Label */}
      inputComponent={/* your custom Input */}
      multilineComponent={/* your custom Multiline */}
    //   selectComponent=
    //   checkboxComponent=
    //   checkboxWrapperComponent=
      buttonComponent={/* your custom Button */}
    //   fieldErrorsComponent=
    //   globalErrorsComponent=
    //   errorComponent=
      {...props}
    />
  )
}