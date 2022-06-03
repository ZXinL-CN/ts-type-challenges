// 参考文档:
//[Mapped Types] https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// [Indexed Access Types] https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// [keyofand Lookup Types] https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
// [Readonly<Type>] https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype

// ts 联合类型 union,使用 in 遍历联合类型
// ts 使用 keyof 获取接口中 key 的类型组成的联合类型


type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

interface todo {
  a: string;
  b: string;
}

// type r = keyof todo

// const rv: r = "a" || "b"





// js
function readonly(obj) {
  const result = {}
  for (const key in obj) {
    result['readonly_' + key] = obj[key];
  }
  return result;
}

// 1.返回一个对象
// 2. 遍历 obj （js 对象    ts 接口）  in  → mapped → keyof → lookup
// 3. 加上 readonly 关键字
// 4. 通过 key 来获取 obj（接口）里面的值