import sys
arr = list(map(int, input().split()))


ans = 100000

def getdiff(a, b, c):
    A = abs(a + b)
    B = abs(b + c)
    C = abs(a + c)
    
    MAX = max(A, B, C)
    MIN = min(A, B, C)

    return MAX - MIN

for i in range(6):
    for j in range(i+1, 6):

        for m in range(6):
            for n in range(m+1, 6):
                if m == i or n == j or m == j or n == i:
                    continue
                
                sum1 = arr[i] + arr[j]
                sum2 = arr[m] + arr[n]
                sum3 = sum(arr) - sum1 - sum2
                ans = min(ans, getdiff(sum1, sum2, sum3))

print(ans)