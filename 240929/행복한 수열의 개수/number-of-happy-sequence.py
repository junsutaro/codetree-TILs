n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

ans = 0

# i 고정하고 세로로 봅시다
for i in range(n):
    cnt = 1
    for j in range(n-1):
        if arr[i][j] == arr[i][j+1]:
            cnt += 1
        else:
            cnt = 1
        if cnt == m:
            ans += 1
            break

# j 고정하고 가로로 봅시다
for j in range(n):
    cnt = 1
    for i in range(n-1):
        if arr[i][j] == arr[i+1][j]:
            cnt += 1
        else:
            cnt = 1
        if cnt == m:
            ans += 1
            break

if n == 1:
    ans = 2

print(ans)