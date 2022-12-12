// add code snippets from README
let state;
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

function render(params) {
  document.querySelector("#container").textContent = state.count;
}
function dispatch(action) {
  state = changeState(action, state);
  render();
}

dispatch({ type: "@@INIT" });

button.addEventListener("click", () => {
  dispatch({ type: "counter/increment" });
});
