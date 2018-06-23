import _ from 'lodash'
import postcss from 'postcss'
import buildSelectorVariant from '../util/buildSelectorVariant'
import generateVariantFunction from '../util/generateVariantFunction'

function generatePseudoClassVariant(pseudoClass) {
  return generateVariantFunction(({ className, separator }) => {
    return `.${pseudoClass}${separator}${className}:${pseudoClass}`
  })
}

const defaultVariantGenerators = {
  'group-hover': (container, { options: { separator } }) => {
    const cloned = container.clone()

    cloned.walkRules(rule => {
      rule.selector = `.group:hover ${buildSelectorVariant(
        rule.selector,
        'group-hover',
        separator
      )}`
    })

    container.before(cloned.nodes)
  },
  hover: generatePseudoClassVariant('hover'),
  focus: generatePseudoClassVariant('focus'),
  active: generatePseudoClassVariant('active'),
}

export default function(config, { variantGenerators: pluginVariantGenerators }) {
  return function(css) {
    const variantGenerators = {
      ...defaultVariantGenerators,
      ...pluginVariantGenerators,
    }

    css.walkAtRules('variants', atRule => {
      const variants = postcss.list.comma(atRule.params).filter(variant => variant !== '')

      if (variants.includes('responsive')) {
        const responsiveParent = postcss.atRule({ name: 'responsive' })
        atRule.before(responsiveParent)
        responsiveParent.append(atRule)
      }

      atRule.before(atRule.clone().nodes)

      _.forEach(_.without(variants, 'responsive'), variant => {
        variantGenerators[variant](atRule, config)
      })

      atRule.remove()
    })
  }
}
