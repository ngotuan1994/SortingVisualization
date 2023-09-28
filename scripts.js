let n = 30;
let array = [];
let speed = 50;
let itmd = []
container = document.getElementById("container");
const run = async () => { await init(n) };
run();

function init(n) {
  container.innerHTML = "";
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 100);

  }
  showBars(array);
}
function speedChange(array) {
  speed = 101 - document.getElementById("speed").value;

}
function sizeChange() {
  n = document.getElementById("size").value;
  array.length = n;
  init(n);
  showBars(array);
}

function showBars(arr,indice) {

  container.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i]  + "%";
    bar.classList.add("bar");
    container.appendChild(bar);
    if (i == indice) {
      bar.style.backgroundColor = "red";
    }


  }
}
function showBars(arr ,indice1, indice2) {

  container.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.classList.add("bar");
    container.appendChild(bar);
    if (i == indice1 || i==indice2) {
      bar.style.backgroundColor = "red";
    }


  }
}

async function BubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        // [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
        showBars(arr,j);
        await sleep(speed);

      }

    }

  }
};

async function merge(start, end) {
    let mid = parseInt((start + end) >> 1);
    let start1 = start, start2 = mid + 1
    let end1 = mid, end2 = end

    // Initial index of merged subarray
    let index = start

    while (start1 <= end1 && start2 <= end2) {
        if (array[start1] <= array[start2]) {
            itmd[index] = array[start1]
            index = index + 1
          start1 = start1 + 1;
          showBars(array, start1);
          await sleep(speed)
        }
        else if(array[start1] > array[start2]) {
            itmd[index] = array[start2]
            index = index + 1
          start2 = start2 + 1;
          showBars(array, start1);
          await sleep(speed)
        }
    }

    while (start1 <= end1) {
        itmd[index] = array[start1]
        index = index + 1
      start1 = start1 + 1;
      showBars(array, start1);
      await sleep(speed)
    }

    while (start2 <= end2) {
        itmd[index] = array[start2]
        index = index + 1
      start2 = start2 + 1;
      showBars(array, start2);
      await sleep(speed)
    }

    index = start
    while (index <= end) {
        array[index] = itmd[index];
      index++;
      showBars(array, index);
      await sleep(speed)
    }
}

const mergeSort = async (start, end) => {
    if (start < end) {
        let mid = parseInt((start + end) >> 1)
        await mergeSort(start, mid)
        await mergeSort(mid + 1, end)
        await merge(start, end)


        // Waiting time is 800ms
        await sleep(speed)
    }
}



async function play() {

  await mergeSort(0, n - 1);
  // BubleSort(array);


}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
