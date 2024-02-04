console.log(process.env);

const { SHELL, WINDIR } = process.env;

console.table({ SHELL, WINDIR });
