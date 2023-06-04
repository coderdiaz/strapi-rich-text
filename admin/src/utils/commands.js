// execCommand() is officially obsolete/deprecated but there's no alternative.
// User agents cannot drop support for execCommand()
// because so many services require support for it.

// TODO: Change this to a more robust solution using Selection and Range APIs
export const execCommand = (command) =>
  document.execCommand(command, false, null)
