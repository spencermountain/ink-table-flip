import { promisify } from 'util'
import { exec } from 'child_process'

export const runCmd = promisify(exec)

await runCmd('cd scripts/demos && vhs mayors.tape')
