import fs from 'fs'
import { mfers } from '../src/node.js'
import { dequal } from 'dequal'

const mfers_data = JSON.parse(fs.readFileSync('./data/mfers.json'))

// output of compression doesn't include image links
const trimmed_input = mfers_data.map(({ traits, i }) => ({ traits, i }) )

console.log(
  dequal(trimmed_input, mfers)
  ? "mfers passed the test!"
  : "mfers failed the test :("
)

