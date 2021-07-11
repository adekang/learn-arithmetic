new Promise((res, rej) => {
  setTimeout(function () {
    res(123);
  }, 1000);
}).then(res => {
  console.log(res);
});

new Promise((res, rej) => {
  setTimeout(function () {
    rej(123);
  }, 1000);
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

var p1 = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(123456);
    }, 1000);
  });

async function q1() {
  const res = await p1();
  console.log(res);
  // await 会拿到的 resolve 结果 ，是then函数的语法糖
}

q1();

function q12() {
  p1().then(res => {
    console.log(res);
  });
}

q12();

// async + await 是 promise + then的语法糖

var p2 = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      rej(123456);
    }, 1000);
  });

async function q2() {
  try {
    const res = await p2();
    console.log('resole');
  } catch (e) {
    console.log('捕获错误');
    console.log(e);
  }
}
q2();

