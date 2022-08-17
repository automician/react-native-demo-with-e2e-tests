import NodeEnvironment from 'jest-environment-node'
import * as wdio from 'webdriverio'
import {WebDriver, Session} from 'selenium-webdriver'
import {HttpClient, Executor} from 'selenium-webdriver/http'
import {config as appiumConfig} from './wdio.appium.android.conf'

/**
 * See examples in https://jestjs.io/ru/docs/configuration#testenvironment-string
 */
export default class CustomEnvironment extends NodeEnvironment {
  wdioDriver: wdio.Browser<'async'>
  sehqDriver: WebDriver

  constructor(config, context) {
    super(config, context)
  }

  async setup() {
    await super.setup()

    this.wdioDriver = await wdio.remote(appiumConfig)

    const {hostname, port, path} = appiumConfig
    const client = new HttpClient(`http://${hostname}:${port}${path}`)
    const executor = new Executor(client)

    this.sehqDriver = new WebDriver(
      new Session(
        this.wdioDriver.sessionId,
        this.wdioDriver.capabilities || {},
      ),
      executor,
    )

    // pass drivers to tests as globals
    this.global.wdioDriver = this.wdioDriver
    this.global.sehqDriver = this.sehqDriver
  }

  async teardown() {
    this.wdioDriver.deleteSession()

    await super.teardown()
  }

  getVmContext() {
    return super.getVmContext()
  }

  async handleTestEvent(event, state) {
    if (event.name === 'test_fn_failure') {
      // TODO: save/atach screenshot on failure (to some report)
    }
  }
}
