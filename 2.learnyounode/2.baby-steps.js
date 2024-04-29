let sum = 0;
const argv = process.argv;

for (let i = 2; i < argv.length; i++) {
  sum += Number(argv[i]);
}

process.stdout.write(sum + "\n");
// node 的 console.log 基于 process.stdout.write，process.stdout.write 默认不带换行，console.log 默认带
