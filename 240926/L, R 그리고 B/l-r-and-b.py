arr = [list(input()) for _ in range(10)]

L, R, B = [], [], []
for i in range(10):
    for j in range(10):
        if arr[i][j] == 'B':
            B = [i, j]
        if arr[i][j] == 'R':
            R = [i, j]
        if arr[i][j] == "L":
            L = [i, j]

ans = 0

if L[0] == B[0] == R[0] or L[1] == B[1] == R[1]:
    ans = abs(B[1] - L[1]) + abs(B[0] - L[0]) + 4
else:
    ans = abs(B[1] - L[1]) + abs(B[0] - L[0]) - 1

print(ans)