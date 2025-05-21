export {}

declare global {
    type SuperOmit<O extends object, K extends keyof O> = Omit<O, K>
    type Optional<O extends object, K extends keyof O> = Omit<O, K> & Partial<Pick<O, K>>
}