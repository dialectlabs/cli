import {expect, test} from '@oclif/test'

describe('broadcast', () => {
  test
  .stdout()
  .command(['broadcast'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['broadcast', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
