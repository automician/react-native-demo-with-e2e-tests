import * as wdio from 'webdriverio'
import {WebDriver, Session} from 'selenium-webdriver'
import {HttpClient, Executor} from 'selenium-webdriver/http'
import {config} from './wdio.appium.android.conf'
import {shared} from './shared'

beforeEach(async () => {
  if (!shared.driver) {
    shared.driver = await wdio.remote(config)

    const {hostname, port, path} = config
    const client = new HttpClient(`http://${hostname}:${port}${path}`)
    const executor = new Executor(client)
    shared.webdriver = new WebDriver(
      new Session(shared.driver?.sessionId, shared.driver?.capabilities || {}),
      executor,
    )
  } else {
    await shared.driver.launchApp()
  }
})

afterEach(async () => {
  await shared.driver?.removeApp('com.velas.mobile-velas-account')
})

afterAll(async () => {
  await shared.driver?.deleteSession()
})
