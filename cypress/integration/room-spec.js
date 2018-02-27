import { h } from 'hyperapp'
import { mount } from 'cypress-hyperapp-unit-test'
import Room from '../../src/components/Room.jsx'

/* eslint-env mocha */
/* globals cy, expect */
describe('Room', () => {
  const state = {}
  const actions = {}
  const view = s => <Room admin={s.admin} players={s.players} room={s.room} />

  beforeEach(() => {
    mount(state, actions, view)
  })

  it('Should have the 3 section headers when no state', async () => {
    const headers = await cy.get('h4')
    expect(headers.length).to.equal(3)
  })
})
