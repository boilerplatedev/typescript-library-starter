import { one, two } from '../src'

describe('Sample Test', () => {
  test('assertions', () => {
    expect(one).toEqual(1)
    expect(two).toEqual(2)
  })
})
