function multiplicator(a: number, b: number, printText: string) {
  console.log(printText, a * b)
}

try {
  const { value1, value2 } = parseArguments(process.argv)
  multiplicator(
    value1,
    value2,
    `Multiplied ${value1} and ${value2}, the result is:`,
  )
} catch (error: unknown) {
  let errorMessage = 'Something bad happend.'
  if (error instanceof Error) {
    errorMessage += ` Error: ${error.message}`
  }
  console.error(errorMessage)
}

interface MultiplyValues {
  value1: number
  value2: number
}

function parseArguments(args: string[]): MultiplyValues {
  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')

  const value1 = Number(args[2])
  if (isNaN(value1)) throw new Error('Provided value `value1` is not a number')
  const value2 = Number(args[3])
  if (isNaN(value2)) throw new Error('Provided value `value2` is not a number')

  return {
    value1,
    value2,
  }
}
