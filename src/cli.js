import arg from 'arg'

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install'
    },
    {
      argv: rawArgs.slice(2)
    }
  )

  return {
    template: args._[0],
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    runInstall: args['--install'] || false
  }
}

export function cli(args) {
  const options = parseArgumentsIntoOptions(args)
  console.log(options)
}
