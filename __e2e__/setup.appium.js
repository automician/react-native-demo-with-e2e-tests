import * as wdio from 'webdriverio'
import {WebDriver, Session} from 'selenium-webdriver'
import {HttpClient, Executor} from 'selenium-webdriver/http'
import {config} from './wdio.appium.android.conf'
import {shared} from './shared'

beforeEach(async () => {
  if (!shared.wdioDriver) {
    shared.wdioDriver = await wdio.remote(config)

    const {hostname, port, path} = config
    const client = new HttpClient(`http://${hostname}:${port}${path}`)
    const executor = new Executor(client)
    shared.sehqDriver = new WebDriver(
      new Session(
        shared.wdioDriver?.sessionId,
        shared.wdioDriver?.capabilities || {},
      ),
      executor,
    )
  } else {
    await shared.wdioDriver.launchApp()
  }
})

afterEach(async () => {
  await shared.wdioDriver?.removeApp('com.velas.mobile-velas-account')
})

afterAll(async () => {
  await shared.wdioDriver?.deleteSession()
})
