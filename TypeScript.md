## never类型是什么

https://blog.csdn.net/cuishizun/article/details/81564294
```
let x: never;
let y: number;

// 运行错误，数字类型不能转为 never 类型
x = 123;

// 运行正确，never 类型可以赋值给 never类型
x = (()=>{ throw new Error('exception')})();

// 运行正确，never 类型可以赋值给 数字类型
y = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无限循环这种无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}
```
https://github.com/Microsoft/TypeScript
