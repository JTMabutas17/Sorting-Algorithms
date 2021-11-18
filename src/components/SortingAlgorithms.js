import React from 'react'

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export const BubbleSort = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
}

export const InsertionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let j = i;
        while(j > 0 && arr[j] < arr[j-1]) {
            swap(arr, j, j-1);
            j--;
        }
    }
}

export const SelectionSort = (arr) => {
    let end = arr.length-1;
    while(end > 0) {
        let i = 0, max = 0;
        while(i <= end) {
            if(arr[i] > arr[max]) {
                max = i;
            }
            i++;
        }
        swap(arr, max, end);
        end--;
    }
}

export const MergeSort = (arr) => {
    
}

export const QuickSort = (arr) => {
    
}