function identity<T>(arg: T): T {
    return arg
}

type StringOrNumber = string | number
function identityStringOrNumber(arg: StringOrNumber): StringOrNumber {
    return arg
}

identity<boolean>(false)
identity<number>(5)
identity<string>('hello')
identityStringOrNumber('hello')
identityStringOrNumber(5)
// identity<Car>(car)