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

# useMemo
The useMemo hook is used to memoize the value in the component (it's like caching a value so that it doesn't need to be recalculated ). It is used to optimize the performance of the component by caching the value results.
UseMemo hook improve performance of our application
The useMemo hook only runs when one of its dependencies gets updated.This can improve the performance of the application.

# useCallback
The useCallback hook is used to memoize the function in the component. It is used to optimize the performance of the component by caching the function results.
useCallback hook allow us to cache a function definition between rerenders which means when we use the useCallback hook , it does not create multiple instance of same function when rerender happens.
Instead of creating new instance of the function, it provides the cached function on rerender of the component.

** useMemo and useCallback both the hooks are same but the differnce is -:

* useMemo hook memoize a value
* useCallback hook memoize the function

# useContext
The useContext hook allow us to access data from any component without explicitly passing it down through props at every level.
 useContext hook is used to manage global data in the react app.
 useContext hook helps to avoid prop drilling.
why we need useContext hook
* when we have to pass the data from parent to child component and child to parent component then we use props in react but when we are working with more nested components or when we have more nested components it will be very difficult to manage the data and we have to pass the data through each component level so to solve this problem we will use useContext hook....useContext hook allow us to create global data and we can access this data from any component without passing it through props at every component level.
* We can use the useContext hook in 3 simple steps -:
1. first one is creating the context
2. second one is providing the context
3. third step is consuming the context

# useReducer 
1. useReducer hook is similar to useState hook, but instead of providing the state and setter function, it provides state and dispatch function.
useReducer hook return an array
2. useReducer hook accepts two arguments :
-Reducer function
-Initial state
and this hook returns current state and Dispatch method inside an array
3. Reducer function specifies how the state gets updated.
