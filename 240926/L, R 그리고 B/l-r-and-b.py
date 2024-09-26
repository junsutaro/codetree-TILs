arr = [list(input()) for _ in range(10)]

L, R, B = None, None, None

for i in range(10):
    for j in range(10):
        if arr[i][j] == 'B':
            B = [i, j]
        if arr[i][j] == 'R':
            R = [i, j]
        if arr[i][j] == "L":
            L = [i, j]

ans = abs(B[1] - L[1]) + abs(B[0] - L[0]) - 1

if L[0] == B[0] == R[0]:  # 같은 행
    if min(L[1], B[1]) < R[1] < max(L[1], B[1]):
        ans += 2
elif L[1] == B[1] == R[1]:  # 같은 열
    if min(L[0], B[0]) < R[0] < max(L[0], B[0]):
        ans += 2

print(ans)