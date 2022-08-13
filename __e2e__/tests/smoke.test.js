import {be, have} from 'selenidejs'
import {$, shared} from '../shared'

test('switch betwean apps', async () => {
  // via longPress
  const element = $('switchToNextApp-onLongPress')
  const timeout = 1100
  const webElement = await element.getWebElement()
  const actions = shared.sehqDriver.actions({async: true})
  await actions
    .move({origin: webElement})
    .press()
    .pause(timeout, actions.mouse())
    .release()
    .perform()

  await $('App-stub').should(have.text('Hey, here will be a Stock Price App'))

  // via click
  await $('switchToNextApp-onPress').click()
  await $('«Step One»').should(be.present)
})
