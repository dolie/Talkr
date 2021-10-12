/// <reference types="react" />
export interface TProps {
    children: React.ReactNode;
    languages: Record<string, any>;
    defaultLanguage: string;
    detectBrowserLanguage?: boolean;
}
export interface TContext {
    locale: string;
    setLocale: (language: string) => void;
    languages: Record<string, any>;
    defaultLanguage: string;
}
declare type KeyPrefix<T extends string> = T extends "" ? "" : `.${T}`;
export declare type KeyPath<T> = (T extends object ? {
    [K in Exclude<keyof T, symbol>]: `${K}${KeyPrefix<KeyPath<T[K]>>}`;
}[Exclude<keyof T, symbol>] : "") extends infer D ? Extract<D, string> : never;
export declare type TParams = {
    count?: number;
    [key: string]: any;
};
export declare type Autocomplete<schema> = KeyPath<schema> | (string & {});
export {};