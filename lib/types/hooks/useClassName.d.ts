import { ClassNameList } from '@bem-react/classname';
declare function mergeClassName(...classes: ClassNameList): string;
declare function useClassName(blockClassName: string): {
    cn: import("@bem-react/classname").ClassNameFormatter;
    mergeClassName: typeof mergeClassName;
};
export default useClassName;
//# sourceMappingURL=useClassName.d.ts.map