const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(1000).then(() => {
      console.log(values)
  })
}

export default submit