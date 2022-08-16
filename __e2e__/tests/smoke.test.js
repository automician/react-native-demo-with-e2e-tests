import {be, have} from 'selenidejs'
import {$} from '../shared'
import {command} from '../utils/selenidejs/command'

test('switch betwean apps', async () => {
  await $('switchToNextApp-onLongPress').longPress()
  await $('App-stub').should(have.text('Hey, here will be a Stock Price App'))

  await $('switchToNextApp-onLongPress').perform(command.longPress) // just an example of different and now new style of calling longPress as command without `()`; TODO: refactor to normal style
  await $('«Step One»').should(be.present) // TODO: monkey patch be.visible to = be.present
})
