/* basic redux we initial state, we have an action object that through its type property  specifies how to update state, a reducer function that takes in the action and initial state and emits updated state
We have a dispatch that displatches the action, Ie. calls the reducer and consequently updates state*/

/* we wrap the state and the dispatch in a create store function that returns an object of the diplatch function as well as a method that returns the current state, we create a store which holds the object returned by calling the create store function */

/* to further abstract and extend flexibility of our create store method we take in the reducer function as a parameter and use it in the dispatch */

function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(action, state);
    render();
  }
  function getState() {
    return state;
  }
  return { dispatch, getState };
}

const button = document.querySelector("#button");

function reducer(action, state = { count: 0 }) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    case "counter/decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
function render() {
  let container = document.querySelector("#container");
  container.textContent = store.getState().count;
}

store.dispatch({ type: "@@INIT" });

button.addEventListener("click", () => {
  store.dispatch({ type: "counter/increment" });
});
