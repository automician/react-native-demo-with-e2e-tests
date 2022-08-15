// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as selenide from 'selenidejs'

declare global {
  // TODO: consider moving this to selenidejs library
  namespace Selenide {
    interface Element extends selenide.Element {}
    interface Collection extends selenide.Collection {}
    interface Browser extends selenide.Browser {}
  }
}
