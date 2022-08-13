import * as wdio from 'webdriverio'
import * as selenide from 'selenidejs'
import {Configuration} from 'selenidejs'
import {WebDriver} from 'selenium-webdriver'
import {mobile} from './utils/selenidejs/mobile.extensions'
import {By} from 'selenium-webdriver'

export const shared: {
  wdioDriver: wdio.Browser<'async'>,
  sehqDriver: WebDriver,
  browser: selenide.Browser,
} = {
  wdioDriver: undefined,
  sehqDriver: undefined,
  browser: selenide.Browser.configuredWith()
    .driver(() => shared.sehqDriver)
    ._locationStrategy(mobile.selectorToBy)
    .timeout(10000)
    .build(),
}

export function $(
  located:
    | string
    | By
    | {
        script: string | ((document: Document) => HTMLElement),
        args?: any[],
      },
  customized?: Partial<Configuration>,
): selenide.Element {
  return shared.browser.element(located, customized)
}

export function $$(
  located:
    | string
    | By
    | {
        script: string,
        args?: any[],
      },
  customized?: Partial<Configuration>,
): selenide.Collection {
  return shared.browser.all(located, customized)
}
