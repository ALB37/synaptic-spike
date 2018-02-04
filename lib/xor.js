'use strict';

const {Layer, Network} = require('synaptic');

const inputLayer = new Layer(2);
const hiddenLayer = new Layer(3);
const outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer,
});

const LEARNING_RATE = .3;

for (let i = 0; i < 20000; i++){
  myNetwork.activate([0, 0]);
  myNetwork.propagate(LEARNING_RATE, [0]);

  myNetwork.activate([0, 1]);
  myNetwork.propagate(LEARNING_RATE, [1]);

  myNetwork.activate([1, 0]);
  myNetwork.propagate(LEARNING_RATE, [1]);

  myNetwork.activate([1, 1]);
  myNetwork.propagate(LEARNING_RATE, [0]);
}

module.exports = myNetwork;