import {run} from '@cycle/run'
import {makeFelaDomDriver} from 'cycle-fela'
import {App} from './app'

const main = App

const drivers = {
  DOM: makeFelaDomDriver('#app')
}

run(main, drivers)
