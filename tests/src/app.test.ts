import { strict as assert } from 'node:assert'
import test from 'node:test'

test('passing unit in tests', (t) => {
	assert.strictEqual(1, 1)
})
