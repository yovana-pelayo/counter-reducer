import { useEffect, useReducer, useState } from 'react'

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
}
const initialCountColor = { count: 0, currentColor: colors.yellow }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1, currentColor: state.currentColor }

    case 'decrement':
      return { count: state.count - 1, currentColor: state.currentColor }

    case 'reset':
      return { count: 0, currentColor: state.currentColor }

    case 'zero':
      return {
        count: state.count,
        currentColor: colors.yellow,
      }

    case 'positive':
      return {
        count: state.count,
        currentColor: colors.green,
      }

    case 'negative':
      return {
        count: state.count,
        currentColor: colors.red,
      }

    default:
      throw new Error('unable to process action!!!')
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialCountColor)

  useEffect(() => {
    if (state.count === 0) {
      dispatch({ type: 'zero' })
    }

    if (state.count > 0) {
      dispatch({ type: 'positive' })
    }

    if (state.count < 0) {
      dispatch({ type: 'negative' })
    }
  }, [state.count])

  // const increment = () => {
  //   setCount((prevState) => prevState + 1)
  // }

  // const decrement = () => {
  //   setCount((prevState) => prevState - 1)
  // }

  // const reset = () => {
  //   setCount(0)
  // }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: state.currentColor }}>
        {state.count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={() => dispatch({ type: 'increment' })}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={() => dispatch({ type: 'decrement' })}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
