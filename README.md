# tailwind-psuedo
A tiny utility function to join tailwind psuedo classes to together.

### Installation

npm
```bash
npm install tailwind-psuedo
```

yarn 
```bash
yarn add tailwind-psuedo
```

bun 
```bash
bun add tailwind-psuedo
```
### How to use?

To use the library, simply import it into your jsx/tsx file and call the twPsuedo() function with an object of pseudo element styles. For example:

#### example:
```tsx
import { twPsuedo } from "tailwind-psuedo";

export function Button(){
  return <button className={twPsuedo({
    after: 'bg-red-400 text-white border-xl'
  )}>Click Me</button>
}
```

Which will be translated into below code while run time.

```html
<button class="after:bg-red-400 after:text-white after:border-xl">Click Me</button>
```

### Contributing

Here's how you can contribute:

- [Open an issue](https://github.com/Chakravarthy7102/tailwind-psuedo/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/Chakravarthy7102/tailwind-psuedo/oull) to add new features/make quality-of-life improvements/fix bugs.

## License

Licensed under the [MIT license](https://github.com/Chakravarthy7102/tailwind-psuedo/blob/main/LICENSE).

  
