
import { SPLIT_CLASSES_REGEX } from './constants'
import { TailwindPsuedoConfig } from './types'

export function twPsuedo(config: TailwindPsuedoConfig) {

    let normalizedClasses = Object.keys(config)
        .map((psuedoClass) => {
            const classList = config[psuedoClass]
                .split(SPLIT_CLASSES_REGEX)
                .map((className) => {
                    return `${psuedoClass}:${className}`
                })
                .join(' ')

            return classList
        })
        .join(' ')

    return normalizedClasses
}