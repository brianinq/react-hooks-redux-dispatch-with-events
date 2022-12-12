// add code snippets from README
function createStore() {
  let state;

  function dispatch(action) {
    state = changeState(action, state);
    render();
  }
  function getState() {
    return state;
  }
  return { dispatch, getState };
}

const button = document.querySelector("#button");

function changeState(action, state = { count: 0 }) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    case "counter/decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore();
function render() {
  let container = document.querySelector("#container");
  container.textContent = store.getState().count;
}

store.dispatch({ type: "@@INIT" });

button.addEventListener("click", () => {
  store.dispatch({ type: "counter/increment" });
});
