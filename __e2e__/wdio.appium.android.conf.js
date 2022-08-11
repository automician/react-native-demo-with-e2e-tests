import {RemoteOptions} from 'webdriverio'
import * as path from 'path'

export const config: RemoteOptions = {
  hostname: '127.0.0.1',
  port: 4723,
  path: '/wd/hub',
  capabilities: {
    platformName: 'Android',
    app: path.resolve('./android/app/build/outputs/apk/debug/app-debug.apk'),
    automationName: 'UiAutomator2',
    fullReset: true,
    newCommandTimeout: 1000,
  },
  waitforTimeout: 100000,
  connectionRetryCount: 3,
  logLevel: 'info',
}
