const path = require('path');
const cwd = process.cwd();
const svgDir = path.join(cwd, './src/icons');
const svgReg = /\.svg$/;

module.exports = function override(config, env) {
  const params = {
    test: svgReg,
    include: svgDir,
    loader: require.resolve('svg-sprite-loader'),
  };
  const ruleList = config.module.rules[1].oneOf;
  const index = ruleList.findIndex((v) => {
    return typeof v.test === 'object' && String(v.test) === String(svgReg);
  });
  if (index > 0) {
    // exclude default Svg loader
    ruleList[index].exclude = svgDir;
    // add loader
    ruleList.splice(index, 0, params)
  }
  return config;
};