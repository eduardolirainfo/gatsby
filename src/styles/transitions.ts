const defaultTiming = '0.3s ease'
const bgTransition = `background ${defaultTiming}`
const colorTransition = `color ${defaultTiming}`
const defaultTransition = `${bgTransition}, ${colorTransition}`
const cubicTransition = 'cubic-bezier(0.6, 0, 0.4, 1) 0.2s'

const transitions = {
  DEFAULT: defaultTransition,
  COLOR: colorTransition,
  BACKGROUND: bgTransition,
  ALL: defaultTiming,
  CUBIC: cubicTransition
}

export default transitions
