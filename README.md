# learn-react-hooks
Learning all the react hooks with implementation , practical example and code

# Benefits of React Hooks
React hooks simplify the code, improves the readability, reusability and overall performance of the application.

# Most commonly used hooks are:

* useState
* useEffect
* useRef
* useMemo
* useCallback
* useContext
* useReducer
* useLayoutEffect
* custom hooks -> means we can create our hooks in react


# useState
The useState hook is used to manage the state of the component. It is used to store the data in the component and update the data when required.

# useEffect
The useEffect hook is used to perform side effects in the component. It is used to perform actions like fetching data from the api (server), updating the DOM and timers like setTimeOut and setInterval.

# useRef
The useRef hook is used to store the reference of the DOM element in the component. It is used to access the DOM element in the component.
useRef does not rerender the component when state changes
when we dont want to rerender the component when the state changes(means value of a variable changes) in that case we will use useRef hook.