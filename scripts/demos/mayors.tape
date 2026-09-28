# https://github.com/charmbracelet/vhs/tree/main#vhs-command-reference

Set Theme Mirage
Output mayors.gif

Require node
Require tsx

Set Shell "bash"
Set FontSize 32
Set Width 1800
Set Height 600

Type@15ms "node --import tsx mayors.jsx" Sleep 5ms
Sleep 500ms
Enter
Sleep 2500ms

Tab
Enter
Sleep 1500ms

Enter
Sleep 1500ms

Enter
Sleep 1500ms

Enter
Sleep 1500ms

Sleep 5s
