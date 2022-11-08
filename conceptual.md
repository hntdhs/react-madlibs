### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
It's a front end framework for JS that Facebook made. The attraction is components, which make it easy to reuse code and incorporate HTML right into your JavaScript. It's a good way to build apps made up of independent parts that are independent, but when operating together create a whole.

- What is Babel?
It's a tool that translates newer JS into JS that's compatible with older things that run JS.

- What is JSX?
It's a tool that makes writing HTML in JS very simple. It's not a requirement for being able to do anything, it just makes things easier.

- How is a Component created in React?
You write a JS function with the difference from normal JS being that this function will return HTML.

- What are some difference between state and props?
Props are arguments that get passed into components. They're something you want the component function to make use of when it runs. State is something that is managed by components. The output of the component is influenced by both, and changes to either trigger a new render. On GitHub: "If a component needs to alter one of its attributes at some point, that attribute should be a part of its state, otherwise it should be a prop for that component."
https://github.com/uberVU/react-guide/blob/master/props-vs-state.md

- What does "downward data flow" refer to in React?
It's the concept of a parent component passing its data down to children using props.

- What is a controlled component?
A component that handles form data using state. The values of input elements are controlled by state, and state alone. When something is being typed into an input, the onChange event attached to it sets the value of the input using its updater function (i.e. [name, setName = useState() - setName sets the value of name via onChange as a user types])

- What is an uncontrolled component?
Components whose input elements have values controlled by the DOM itself, not state. React has no control over the value of the form input elements.

- What is the purpose of the `key` prop when rendering a list of components?
It reinitializes each component, meaning any and all state that existed previously on the component will be wiped.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Because it won't know if things are reordered.

- Describe useEffect.  What use cases is it used for in React components?
It's a hook that allows you to perform side effects in components without effecting the rendering process of the component or its performance. Use case examples would be fetching data or updating the DOM with React.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
It's a hook that allows you to store a value between renders, as it does not cause a render on its own like useState does.

- When would you use a ref? When wouldn't you use one?
You might use it to access an element directly in the DOM, or to keep track of previous values in state. You don't want to use refs any time something can be done declaratively.

- What is a custom hook in React? When would you want to write one?
If you have a component containing logic that could be re-used by other components, you should make a custom hook (which always start with "use"). Building that hook allows you to extract that logic from the component into a reusable function.
