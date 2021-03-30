// NOTE this is export default and will ONLY export the one thing (ValuesController).
import ValuesController from "./Controllers/ValuesController.js";


// Entry point into the application
// starts up all of our controllers
// middleman connection piece between all the buttons/clicks. Connects the app to the DOM
console.log(1);
class App {
  valuesController = new ValuesController();
}

window["app"] = new App();
