function a () {
  console.log('a')
}

function b () {
  console.log('b')
}
a()
b()

console.log('----------')

function a () {
  setTimeout(function() {
    console.log('a')
  }, 1000)
}

a()
b()

function a (cb) {
  setTimeout(function () {
    console.log('a')
    cb()
  }, 1000)
}

a(function () {
  b()
})

console.log('콜백지옥')

function a (cb) {
  setTimeout(function () {
    console.log('a')
    cb()
  }, 1000)
}
function b (cb) {
  setTimeout(function () {
    console.log('a')
    cb()
  }, 1000)
}
function c (cb) {
  setTimeout(function () {
    console.log('a')
    cb()
  }, 1000)
}
function d (cb) {
  setTimeout(function () {
    console.log('a')
    cb()
  }, 1000)
}

a(function () {
  b(function () {
    c(function() {
      d()
    })
  })
})

console.log('promise')

function a () {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log('a')
      resolve()
    }, 1000)
  })
}

function b () {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log('b')
      resolve()
    }, 1000)
  })
}

function c () {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log('c')
      resolve()
    }, 1000)
  })
}

function d () {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log('d')
      resolve()
    }, 1000)
  })
}

a()
.then(() => b())
.then(() => c())
.then(() => d())


console.log('async - await')

async function asyncFunc() {
  await a()
  await b()
  await c()
  await d()
  console.log('done')
}

console.log('promise - reject')

function a () {
  return new Promise((resolve, reject) => {
    if(isError) {
      reject('error message!')
    }
    setTimeout(() => {
      console.log('a')
      resolve('done')
    }, 1000)
  })
}

a()
.then((res) => {
  console.log(res) // done 출력
})
.catch(error => {
  console.log(error)
  alert(error.message)
})
.finally(() => {
  console.log('done!')
})

console.log('async-await - reject')

async function asyncFunc() {
  try {
    const res = await a()
    console.log(res)
  } catch (error) {
    console.log(error)
    alert(error.message)
  } finally {
    console.log('done!')
  }
}

asyncFunc()