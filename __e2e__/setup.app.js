import {shared} from './shared'

beforeEach(async () => {
  /**
   * App statuses:
   * 0 is not installed.
   * 1 is not running.
   * 2 is running in background or suspended.
   * 3 is running in background.
   * 4 is running in foreground.
   * (see https://appium.io/docs/en/commands/device/app/app-state/)
   */
  if ((await shared.wdioDriver.queryAppState('com.reactnativedemo')) < 4) {
    await shared.wdioDriver.launchApp()
  }
})

afterEach(async () => {
  await shared.wdioDriver.removeApp('com.reactnativedemo')
})
