import {run} from '@cycle/run'
import {makeFelaDomDriver} from 'cycle-fela'
import {App} from './app'

const main = App
const theme = {
  mainColor: '#232323'
}

const drivers = {
  DOM: makeFelaDomDriver('#app', { theme })
}

run(main, drivers)
