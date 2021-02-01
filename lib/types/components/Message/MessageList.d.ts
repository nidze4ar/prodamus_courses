/// <reference types="react" />
import './MessageList.scss';
declare type TProps = {
    errorMessages: {
        [key: string]: string;
    };
};
declare const MessageList: (props: TProps) => JSX.Element | null;
export default MessageList;
//# sourceMappingURL=MessageList.d.ts.map