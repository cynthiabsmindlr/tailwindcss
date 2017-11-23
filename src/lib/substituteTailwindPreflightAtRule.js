import fs from 'fs'
import postcss from 'postcss'

export default function() {
  return function(css) {
    css.walkAtRules('tailwind', atRule => {
      if (atRule.params !== 'preflight') {
        return
      }

      atRule.before(postcss.parse(fs.readFileSync(`${__dirname}/../../css/preflight.css`, 'utf8')))
      atRule.remove()
    })
  }
}
