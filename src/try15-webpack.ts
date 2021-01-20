/*
add webpack.config.ts file
in entry dar bundles/bundle.js zakhire khahad shod

"wp-watch": "webpack-cli --mode=development --watch",
"wp-build": "webpack-cli --mode=production"

"dependencies": {
  "ts-loader": "^8.0.14",
  "typescript": "^4.1.3",
  "webpack": "^4.34.0",
  "webpack-cli": "^3.3.4"
} 
*/

import IceCream from './try13-prop-param-decorators'

console.log()
console.log('*******************')
console.log("Webpack File Codes: ")
console.log('*******************')
let ic: IceCream = new IceCream()
console.log(ic.flavour)