# synaptic-spike
Short spike to demonstrate use of Synaptic JS

## About

This is a simple proof of concept using the Synaptic JS library. It is a demo of training a simple neural net to solve the xor problem as well as simple pattern prediction.

## Getting Started

Basic knowledge of git and npm is assumed. Fork and clone down the repo, and navigate to that directory. Run `npm i` to install just the basic dependencies and `npm i -D` to install eslint and jest. The xor module will take an array of exactly 2 numbers which each must be either 0 or 1. The exported pattern prediction function takes an array of 2 or more numbers between 0 and 1. It will output what the next predicted number in the sequence is assumed to be based on the pattern in the input sequence. To run the tests, make sure you have installed the dev dependencies and type `npm run test`.

## Code Example

```javascript
const prediction = require('./lib/pattern-prediction')

prediction([0, 1, 0, 1, 0, 1, 0])

// output: [0.9994811074653646]
```

## Credits

By Andrew Bloom. Using SynapticJS for neural nets. Using jest to test.