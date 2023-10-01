import { twPsuedo } from "../src/index"

test("should give empty string with empty config",()=>{
    const className = twPsuedo({})
    expect(className).toStrictEqual("")
})

test("should add psuedo element's indentifier",()=>{
    const className =  twPsuedo({
        after: 'bg-red-400 text-white border-xl',
    });

    expect(className).toStrictEqual("after:bg-red-400 after:text-white after:border-xl")
})

test("should emit classNames when multiple psuedo elements are defined",()=>{
    const className = twPsuedo({
        after: 'bg-red-400 text-white border-xl',
        before: 'shadow-xl !border-red-400 text-transperent font-serif',
    })

    expect(className).toStrictEqual("after:bg-red-400 after:text-white after:border-xl before:shadow-xl before:!border-red-400 before:text-transperent before:font-serif")
})