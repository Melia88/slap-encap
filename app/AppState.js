import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

// NOTE ALL date for entire application is stored/exists in the AppState object
class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    // this triggers listeners/observer
    target.emit(prop, value)
    return true
  }
})
