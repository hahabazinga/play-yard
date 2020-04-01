// webcomponents定义的元素需要声明命名空间，否则ts校验会报错
declare namespace JSX {
  interface IntrinsicElements {
    'custom-square': any;
  }
}
