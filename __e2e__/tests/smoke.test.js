import {be, have} from 'selenidejs'
import {$} from '../shared'

test('switch to next app', async () => {
  await $('switchToNextApp-onLongPress').longPress()
  await $('App-stub').should(have.text('Hey, here will be a Stock Price App'))
})

test('switch twice comes back to first app', async () => {
  await $('«Step One»').should(be.visible)
  await $('switchToNextApp-onLongPress').longPress()
  await $('switchToNextApp-onLongPress').longPress()
  await $('«Step One»').should(be.visible)
})
