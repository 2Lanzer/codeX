/*
sort the array from smallet value to highest value
*/

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Reduce the range of comparison
        n--;
    } while (swapped); // Continue if swaps occurred

    return arr;
}

// Test the function
const array = [500, 200, 2000, 6000, 800];
console.log("Sorted Array:", bubbleSort(array));

/* JAVA - bubble sort version
public class BubbleSortExample {

    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;

        do {
            swapped = false;
            for (int i = 0; i < n - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    // Swap the elements
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
            // Reduce the range of comparison
            n--;
        } while (swapped); // Continue if swaps occurred
    }

    public static void main(String[] args) {
        int[] array = {5, 1, 4, 2, 8};
        bubbleSort(array);

        // Print sorted array
        System.out.print("Sorted Array: ");
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
}
*/