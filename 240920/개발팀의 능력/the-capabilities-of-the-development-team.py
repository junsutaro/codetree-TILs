import sys

arr = list(map(int, input().split()))
MAX_VALUE = sys.maxsize
ans = MAX_VALUE

def get_diff(a, b, c): 
    A = abs(a+b)
    B = abs(b+c)
    C = abs(a+c)

    MAX = max(A, B, C)
    MIN = min(A, B, C)

    return MAX - MIN



for i in range(5):
    for j in range(i+1, 5):

          for k in range(5):
            if k == i or k == j:
                continue
        
            sum1 = arr[i] + arr[j]
            sum2 = arr[k]
            sum3 = sum(arr) - sum1 - sum2 

            if sum1 == sum2 or sum1 == sum3 or sum2 == sum3:
                continue

            ans = min(ans, get_diff(sum1, sum2, sum3))

print(ans)