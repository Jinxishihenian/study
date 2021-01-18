/// typescript函数定义.
function test() {
    // 函数定义.
}

/// 返回一个String.
function greet(): string {
    return "Hello World";
}

/// 带参函数.
function add(x: number, y: number) {
    return x + y;
}

console.log(add(1, 2));

/// 可选参数和默认参数.
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + "" + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob");
let result2 = buildName("Bon","Adams");