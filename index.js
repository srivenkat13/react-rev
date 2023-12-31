// const root = document.getElementById("root");

// root.innerHTML = "Hello there from JS";

  const firstChild = React.createElement('p', {key: 'dsaf'}, "First Child");
  const secondChild = React.createElement('p', {key:'djfk'}, "second Child");

const div = React.createElement('div',{className: 'text'},[firstChild,secondChild,thirdChild], "Hello there from react")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(div)


console.log(div);
console.log(root);
