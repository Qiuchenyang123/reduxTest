import { createStore } from "_redux@4.0.4@redux";
import reducer from './reducers/index'
const store = createStore(reducer)
module.exports = store