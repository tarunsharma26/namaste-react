// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am inside H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am inside H2 Tag"),
  ])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
