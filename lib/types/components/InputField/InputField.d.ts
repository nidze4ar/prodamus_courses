import { ChangeEvent } from 'react';
import { InputProps } from 'antd/es/input/Input';
import './InputField.scss';
declare type TProps = {
    value?: any;
    className?: string;
    isRequired?: boolean;
    isValid?: boolean;
    mask?: string;
    maskChar?: string;
    maskPlaceholder?: string;
    autoComplete?: string;
    validateStatus?: "" | "error" | "success" | "warning" | "validating";
    id?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
declare const InputField: (props: TProps & InputProps) => JSX.Element;
export default InputField;
//# sourceMappingURL=InputField.d.ts.map