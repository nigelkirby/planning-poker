import { h } from 'hyperapp'
import { mount } from 'cypress-hyperapp-unit-test'
import Header from '../../src/components/Header.jsx'

/* eslint-env mocha */
/* globals cy */
describe('Header', () => {
  const state = { }
  const actions = {}
  const view = s => <Header brand={s.brand} />

  beforeEach(() => {
    mount(state, actions, view)
  })

  it('header has logo brand', async () => {
    cy.get('.logo').contains(state.brand)
  })
})
