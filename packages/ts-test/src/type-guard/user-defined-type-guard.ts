type TypeA = {
  a: string
}

type TypeB = {
  b: string
}

type TypeC = TypeA | TypeB

export const assertType = (instance: TypeC): asserts instance is TypeA  => {
  if ((instance as TypeA).a == undefined) {
    throw new TypeError("instance is not TypeA")
  }
}
