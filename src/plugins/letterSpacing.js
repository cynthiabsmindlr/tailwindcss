import createUtilityPlugin from '../util/createUtilityPlugin'

export default function () {
  return createUtilityPlugin('letterSpacing', [['tracking', ['letterSpacing']]])
}
