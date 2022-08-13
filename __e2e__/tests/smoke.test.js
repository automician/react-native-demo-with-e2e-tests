import {be, have} from 'selenidejs'
import {$} from '../shared'
import {command} from '../utils/selenidejs/command'

test('switch betwean apps', async () => {
  await $('switchToNextApp-onLongPress').perform(command.longPress())
  await $('App-stub').should(have.text('Hey, here will be a Stock Price App'))

  await $('switchToNextApp-onLongPress').perform(command.longPress())
  await $('«Step One»').should(be.present)
})
