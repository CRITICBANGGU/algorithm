#include <stdio.h>

int number, data[1000001];

void quickSort(int *data, int start, int end) {
    if (start >= end) { return; }
    int key = start;
    int i = start + 1, j = end, temp;
    while (i <= j) {
        while (data[i] <= data[key]) {//왼쪽에서 부터 큰 값 찾기
            i++;
        }
        while (data[j] >= data[key] && j > start) { // 오른쪽에서 부터 작은 값 찾기
            j--;
        }
        if (i > j) {
            temp = data[j];
            data[j] = data[key];
            data[key] = temp;
        } else {
            temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    }
    quickSort(data, start, j - 1);
    quickSort(data, j + 1, end);
}

int main() {
    int i=0;
    scanf("%d", &number);
    while(i<number){
        scanf("%d",&data[i]);
        i++;
    }
    quickSort(data,0,number-1);
    for(int k = 0;k<number;k++){
        printf("%d\n",data[k]);
    }
    return 0;
}