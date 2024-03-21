const setup = () => {
    let months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort(compare);
    console.log(months);

// Expected output: Array ["Dec", "Feb", "Jan", "March"]

    let array1 = [1, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

    let result = array1.sort(compare);
    console.log(result);
    // Expected output: Array [1, 4, 21, 30, 100000]
}

const compare = (a, b) => {
    return a - b;
}

window.addEventListener("load", setup);