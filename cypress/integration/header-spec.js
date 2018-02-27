import { h } from 'hyperapp'
import { mount } from 'cypress-hyperapp-unit-test'
import Header from '../../src/components/Header.jsx'

/* eslint-env mocha */
/* globals cy */
describe('Header', () => {
  let state = {}
  const actions = {}
  const view = s => <Header name={s.name} />

  beforeEach(() => {
    mount(state, actions, view)
  })

  it('when no name tell user to log in', async () => {
    cy.get('div').contains('Please log in')
  })

  state = { name: 'guy' }

  it('has logged in with name message', async () => {
    cy.get('div').contains(`Logged in: ${state.name}`)
  })
})
