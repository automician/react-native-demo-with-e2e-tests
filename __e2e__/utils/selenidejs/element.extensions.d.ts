declare global {
  namespace Selenide {
    export interface Element {
      longPress({duration}?: {duration: number}): Promise<Element>
    }
  }
}

export {}
