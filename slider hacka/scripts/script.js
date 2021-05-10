
const Scene = require('Scene');

const Patches = require('Patches');

const counter = Scene.root.findAll('timer')

const scorestring = Patches.getScalarValue('score');

counter.text = scorestring.toString();

