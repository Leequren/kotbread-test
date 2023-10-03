/* eslint-disable @typescript-eslint/no-var-requires */
const { config } = require('dotenv')
const path = require('path')

config()

const instancesPath = ['src', 'instances']

const indexPath = ['src', 'index']

const envs = {
  env_production: {
    NODE_ENV: 'production',
    ...process.env,
  },
  env_development: {
    NODE_ENV: 'development',
    ...process.env,
  },
}

const scriptPath = (...scriptPath) => {
  let file = scriptPath.at(-1)

  if (process.env.NODE_ENV === 'development') {
    file = `${file}.ts`
  } else {
    file = `${file}.js`
  }

  if (process.env.NODE_ENV === 'production') {
    const firstSrcFileIndex = scriptPath.findIndex((v) => v === 'src')

    scriptPath = scriptPath.slice(firstSrcFileIndex + 1)
  }

  scriptPath.pop()
  scriptPath.push(file)

  return process.env.NODE_ENV === 'development'
    ? path.join(...scriptPath)
    : path.join('dist', ...scriptPath)
}

module.exports = {
  apps: [
    {
      name: 'KotbreadMain',
      instances: 1,
      node_args: '--es-module-specifier-resolution=node',
      script: './dist/index.js',
      ...envs,
    },
  ],
}
