import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class ValuesService {
  addValue() {
    console.log(5)
    // This adds the new value to the end of the values arry using ...   Push will not trigger listener
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

// NOTE the singleton pattern is the concept that the First time its accessed it instantiates (constructs) 1 and then just uses the same object for each other time its accessed.
export const valuesService = new ValuesService();

