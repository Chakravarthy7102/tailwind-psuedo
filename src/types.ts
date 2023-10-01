export type TailwindPsuedoClasses = "before" | "after"

export type TailwindPsuedoConfig = {
    [key:string | TailwindPsuedoClasses ]: string
}