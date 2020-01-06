export type UserType = {
  name: string;
  age: number;
  birthday: number;
};
const userBase: UserType = {
  name: '吕轻侯',
  age: 27,
  birthday: Date.now(),
};
export const getUser = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(userBase);
      } else {
        reject('get user error');
      }
    }, 2000);
  });
