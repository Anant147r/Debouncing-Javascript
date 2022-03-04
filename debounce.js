let counter = 0;
const changeHandler = () => {
  console.log("Api Running ... " + counter++);
};
let timer;
const debouncerFunction = (fn, delay) => {
  //   return () => {
  clearTimeout(timer);
  timer = setTimeout(fn, delay);
  //   };
};

const debouncedFunction = (delay) => debouncerFunction(changeHandler, delay);
