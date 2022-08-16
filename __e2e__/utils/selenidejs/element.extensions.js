import {Element} from 'selenidejs'
import {command} from './command'

Element.prototype.longPress = function ({duration} = {duration: 1000}): string {
  return this.perform(command.longPressWithDuration(duration))
}
