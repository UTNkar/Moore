/**
 * @param {String} block
 * @param {Object} [presetOptions]
 * @param {String} [presetOptions.namespace]
 * @returns {RegExp}
 */
function bemSelector(block, presetOptions) {
  const ns = presetOptions && presetOptions.namespace ? `${presetOptions.namespace}-` : '';
  const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
  const element = `(?:__${WORD})?`;
  const modifier = `(?:(?:_|--)${WORD}){0,2}`;
  const attribute = '(?:\\[.+\\])?';
  return new RegExp(`^\\.${ns}${block}${element}${modifier}${attribute}$`);
}

/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-selector-bem-pattern', 'stylelint-prettier', 'stylelint-scss'],
  rules: {
    'no-descending-specificity': null,
    'plugin/selector-bem-pattern': {
      componentSelectors: bemSelector,
      preset: 'bem',
    },
    'prettier/prettier': true,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'selector-class-pattern': null,
  },
};
