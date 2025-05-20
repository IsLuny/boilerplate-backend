export {}

declare global {
    type SuperOmit<Object extends object, Key extends keyof Object> = Omit<Object, Key>
}