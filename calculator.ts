type Operation = 'multiply' | 'add' | 'divide'

function calculator(a: number, b: number, op: Operation): number {
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

try {
  console.log('Result for 8 + 10:', calculator(8, 10, 'add'))
  console.log('Result for 1 * 5:', calculator(1, 5, 'multiply'))
  console.log('Result for 4 / 2:', calculator(4, 2, 'multiply'))
  console.log('Result for 2 / 4:', calculator(2, 4, 'divide'))
  console.log('Result for 1 / 0:', calculator(1, 0, 'divide'))
} catch (error) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message
  }
  console.error(errorMessage)
}

console.log(process.argv)
