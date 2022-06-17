
function getDigitalCounts(max: number) {
    let count = 1;
    while (max / 10 >= 1) {
        max = max / 10;
        count++;
    }
    return count;
}

//基数排序
function radixSort(arr: number[], length: number) {
    const max = Math.max(...arr);
    const digitalCounts = getDigitalCounts(max);
    const counter = [];
    for (let i = 0; i < digitalCounts; i++) {
        for (let j = 0; j < arr.length; j++) {
            const index = Math.floor((arr[j] * 10 / Math.pow(10, i + 1)) % 10);
            if (!counter[index]) {
                counter[index] = [];
            }
            counter[index].push(arr[j]);
        }
        let pos = 0;
        for (let j = 0; j < counter.length; j++) {
            let value = null
            if (counter[j]) {
                while (value = counter[j].shift()) {
                    arr[pos++] = value;
                }
            }
        }
    }
    // return arr;
}

// 冒泡排序
function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// 选择排序
function selectSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

function main() {
    const arr = [53, 542, 3, 63, 14, 214, 154, 748, 616, 26];
    const length = arr.length;
    //radixSort(arr, length);
    //bubbleSort(arr);
    selectSort(arr);
    console.log(arr);
}

main();