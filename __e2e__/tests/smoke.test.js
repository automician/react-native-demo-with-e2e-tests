import {be, have} from 'selenidejs'
import {$} from '../shared'

test('switch betwean apps', async () => {
  await $('switchToNextApp-onLongPress').longPress()
  await $('App-stub').should(have.text('Hey, here will be a Stock Price App'))

  await $('switchToNextApp-onLongPress').longPress()
  await $('«Step One»').should(be.present) // TODO: monkey patch be.visible to = be.present
})
