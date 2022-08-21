// import a class, exported as "exports.JSDOM = JSDOM"
import { JSDOM } from "jsdom";

// should output "<html><head></head><body><p>Hello, World!</p></body></html>"
JSDOM.fromFile("./index.html").then(doc => console.log(doc.serialize()));