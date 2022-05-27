// 参考文档:
//[Mapped Types] https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// [Indexed Access Types] https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// [keyofand Lookup Types] https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
// [generic-constraints] https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints

// ts 联合类型 union,使用 in 遍历联合类型
// ts 取值与 js 相同
// ts 使用 extends 进行条件约束
// ts 使用 keyof 获取接口中 key 的类型组成的联合类型
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}


// 对比js中的函数
function myPick(todo, keys) {
  const obj = {}
  keys.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  })
  return obj
}


// 1. 返回一个对象
// 2. forEach遍历
// 3. todo[key] 取值
// 4. 判断key是否存在于todo