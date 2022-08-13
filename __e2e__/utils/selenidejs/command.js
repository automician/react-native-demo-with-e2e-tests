import {Element, perform} from 'selenidejs'
import {lambda} from 'selenidejs/built/utils'

export const command = {
  ...perform,
  longPress: ({duration} = {duration: 1000}) =>
    lambda('longPress', async (element: Element) => {
      const driver =
        typeof element.configuration.driver === 'function'
          ? element.configuration.driver()
          : element.configuration.driver
      const actions = driver.actions({async: true})
      const webElement = await element.getWebElement()

      await actions
        .move({origin: webElement})
        .press()
        .pause(duration, actions.mouse())
        .release()
        .perform()
    }),
}
