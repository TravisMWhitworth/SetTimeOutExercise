// SET TIMEOUT METHOD

// 1a
setTimeout(() => {
    // 1b
    const first = document.querySelector('#first');
    // Or
    /*
    const first = document.getElementById('first');
    const first = document.querySelector('div');
    */
    // 1c
    const p1 = document.createElement('p');
    // 1d
    p1.innerText = `Hi`;
    // 1e
    first.append(p1);
  }, 1000);
  
  // 2a
  setTimeout(() => {
    // 2b
    const nesting = document.querySelector('#nesting');
    // Or
    // const nesting = document.getElementById('nesting');
    // 2c
    const p2 = document.createElement('p');
    // 2d
    p2.innerText = "Outer";
    // 2e
    nesting.append(p2);
    // 2f
    setTimeout(() => {
      // 2g
      const p3 = document.createElement('p');
      // 2h
      p3.innerText = "Inner";
      // 2i
      nesting.append(p3);
    }, 1000);
  }, 2000);
  
  