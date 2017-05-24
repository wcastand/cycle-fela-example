import {div, input} from '@cycle/dom'
import { createComponent } from 'cycle-fela'
import xs from 'xstream'

const Title = createComponent(({mobile = false}) => ({color: mobile ? "red" : "yellow"}), 'h1')

export function App (sources) {
  const vtree$ = sources.DOM.select('input').events('click')
  .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled => div([
        input({attrs: {type: 'checkbox'}}),
        Title({mobile: toggled}, 'Hello World')
      ])
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
