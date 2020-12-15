/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const dotenvLoad = require('dotenv-load')

const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

dotenvLoad()

module.exports = withPlugins([withImages], {
  onDemandEntries: {
    // Make sure entries are not getting disposed.
    maxInactiveAge: 1000 * 60 * 60,
  },
  webpack(config, options) {
    config.node = {
      fs: 'empty',
    }
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    config.resolve.alias['@themes'] = path.join(__dirname, 'src/themes')
    return config
  },
})
