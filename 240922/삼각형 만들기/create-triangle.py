import sys;
n = int(input())
arr = [tuple(map(int, input().split())) for _ in range(n)]

ans = 0

# select 3
for i in range(n - 2):
    for j in range(i+1, n-1):
        for k in range(j+1, n):
            A = arr[i]; B = arr[j]; C = arr[k]

            # 한 변은 x축에평행, 다른 한 변은 y축에 평행
            if (A[0] - B[0] == 0 and ( B[1] - C[1] == 0 or A[1] - C[1] == 0 )) or \
                (A[0] - C[0] == 0 and ( B[1] - C[1] == 0 or A[1] - B[1] == 0 )) or \
                (B[0] - C[0] == 0 and ( A[1] - C[1] == 0 or A[1] - B[1] == 0 )):
                temp = abs((A[0]*B[1] + B[0]*C[1] + C[0]*A[1]) - (B[0]*A[1] + C[0]*B[1] + A[0]*C[1]))
                ans = max(temp, ans)

print(ans)