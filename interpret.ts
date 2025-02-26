function interpret(command: string): string {
  return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
}

console.log(interpret("G()(al)"));
