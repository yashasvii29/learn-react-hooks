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
useRef hook is used to manipulate the dom, it is used for dom manipulation.
It returns a object with a single property current and with the help of that current property we can manipulate the dom element 
It also changes the value in real time.

# useMemo
The useMemo hook is used to memoize the value in the component (it's like caching a value so that it doesn't need to be recalculated ). It is used to optimize the performance of the component by caching the value results.
When you use the useMemo hook, you are caching the value so that it doesn't need to be recalculated on every render, thereby improving the performance of your application.
UseMemo hook improve performance of our application
The useMemo hook only runs when one of its dependencies gets updated.This can improve the performance of the application.

Caching (not catching):
useMemo is used for caching the result of a computation.

Improving Performance:
By avoiding redundant calculations, useMemo helps in improving the performance of your application.

Dependencies:
The memoized value is only recalculated when one of the dependencies changes, ensuring that the calculation is performed only when necessary.

# useCallback
The useCallback hook is used to memoize the function in the component. It is used to optimize the performance of the component by caching the function results.
useCallback hook allow us to cache a function definition between rerenders which means when we use the useCallback hook , it does not create multiple instance of same function when rerender happens.
Instead of creating new instance of the function, it provides the cached function on rerender of the component.

In the context of the useCallback hook, caching refers to the practice of storing a function so that the same instance of the function is reused between renders, rather than creating a new instance of the function on each render. This helps to optimize performance by ensuring that the function reference remains stable across renders unless its dependencies change.

How useCallback Works
When you use useCallback, you are instructing React to remember the function and only recreate it when one of its dependencies has changed. This can prevent unnecessary re-renders of child components that depend on that function, as they will only re-render if the function reference itself changes.

* useMemo and useCallback both the hooks are same but the differnce is -:

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

The useReducer hook in React is a powerful tool for managing state, especially in cases where the state logic is complex or involves multiple sub-values. It is an alternative to useState and is more suited for handling state transitions that follow a specific set of rules or actions.

* How useReducer Works
reducer: A function that determines how the state should change based on an action. It takes the current state and an action as arguments and returns a new state.
initialState: The initial state value.
state: The current state, returned by the hook.
dispatch: A function to dispatch actions to the reducer.

* useState:
Simpler and more straightforward.
Best for simple state management.

* useReducer:
Better for complex state logic.
Provides a clear structure for state transitions.
