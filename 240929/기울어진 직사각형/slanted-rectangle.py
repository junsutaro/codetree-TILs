n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

directions = [(1, -1), (1, 1), (-1, 1), (-1, -1)]

def marummo(i, j, dir, temp_sum):
    global ans
    if dir == 4:
        if i == si and j == sj:
            ans = max(ans, temp_sum)
            return
        else:
            return

    temp_sum += arr[i][j]

    ni = i + directions[dir][0]
    nj = j + directions[dir][1]

    if 0 <= ni < n and 0 <= nj < n:
        marummo(ni, nj, dir, temp_sum)
        marummo(ni, nj, dir+1, temp_sum)
    

ans = 0

for si in range(n):
    for sj in range(n):
        marummo(si, sj, 0, 0)

print(ans)