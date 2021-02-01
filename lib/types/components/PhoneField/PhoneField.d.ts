/// <reference types="react" />
import { PhoneInputProps } from "react-phone-input-2";
import './PhoneField.scss';
declare type TProps = {
    className?: string;
    isValidPhone?: boolean;
    isRequired?: boolean;
    messageMargin?: number;
    name?: string;
    autoComplete?: string;
    validateStatus?: "" | "error" | "success" | "warning" | "validating";
    id?: string;
};
declare const PhoneField: (props: TProps & PhoneInputProps) => JSX.Element;
export default PhoneField;
//# sourceMappingURL=PhoneField.d.ts.map