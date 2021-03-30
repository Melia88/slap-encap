// this is export and it puts it in an object so you can export more than one thing in that file. {the thing that you want goes here}
import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private because theres no export on this
function _draw() {
  console.log(3, 'then 7');
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  <div className="card-columns values">
  ${template}
  </div>
  `
}

// Not the controllers job to hold any data. No this. here 
//Public
export default class ValuesController {
  constructor() {
    console.log(2)
    // NOTE ProxyState(copy of the state)is listener/observer: pass the draw function to be called when the 'values' property gets updated. Watch for when value is changes then call _draw function.
    ProxyState.on("values", _draw);
    // Manually call draw the first time
    _draw()
  }

  addValue() {
    console.log(4)
    valuesService.addValue()
  }

}
//  onclick="app.valuesController.addValue() goes in the HTML to call this function