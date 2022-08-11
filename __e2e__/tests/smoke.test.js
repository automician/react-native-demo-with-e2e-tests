import {have} from 'selenidejs'
import {$} from '../shared'

test('switch to stock price app', async () => {
  await $('switchToNextApp-onPress').click()

  await $('App-stub').should(have.text('Hey, here will be a Stock Price App'))
})
