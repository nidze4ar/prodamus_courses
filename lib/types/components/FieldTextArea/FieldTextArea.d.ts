import { ChangeEvent } from 'react';
import { TextAreaProps } from 'antd/lib/input/TextArea';
declare type TProps = {
    value?: any;
    className?: string;
    required?: boolean;
    valid?: boolean;
    validateStatus?: "" | "error" | "success" | "warning" | "validating";
    id?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};
export declare type FieldTextAreaProps = TProps & TextAreaProps;
declare const FieldTextArea: (props: FieldTextAreaProps) => JSX.Element;
export default FieldTextArea;
//# sourceMappingURL=FieldTextArea.d.ts.map