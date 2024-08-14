export type Operation = 'multiply' | 'add' | 'divide'

export function calculator(a: number, b: number, op: Operation): number {
  switch (op) {
    case 'multiply': {
      return a * b
    }
    case 'add': {
      return a + b
    }
    case 'divide': {
      if (b === 0) throw new Error(`Can't divide by 0`)
      return a / b
    }
    default: {
      throw new Error('Operation is not multipy, add or divide!')
    }
  }
}
