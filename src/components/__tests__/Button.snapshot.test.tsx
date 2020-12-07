import React from 'react'
import { Button } from '../../components/Button'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Button href={'#'}>Default Button</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
