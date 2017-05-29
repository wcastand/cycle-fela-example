import {div, input} from '@cycle/dom'
import { createComponent } from 'cycle-fela'
import xs from 'xstream'

const Bold = () => ({fontWeight: 'bold'})
const Title = createComponent(({mobile = false}) => ({fontWeight: 'normal', color: mobile ? "red" : "gray"}), 'h1')
const BoldTitle = createComponent(Bold, Title)
export function App (sources) {
  const vtree$ = sources.DOM.select('input').events('click')
  .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled => div([
        input({attrs: {type: 'checkbox'}}),
        Title({mobile: toggled}, 'Hello World'),
        BoldTitle({mobile: toggled}, 'Hello World'),
      ])
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
