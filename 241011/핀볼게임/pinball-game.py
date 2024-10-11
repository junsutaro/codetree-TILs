n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

# 오른 위 왼 아래
moves = ((0, 1), (-1, 0), (0, -1), (1, 0))


def pinball(i, j, dir):
    time = 1

    while True:
        # print(time, i, j)

        if grid[i][j] == 1:
            if dir == 0 or dir == 2:
                dir = (dir + 1) % 4
            else:
                dir = (dir + 3) % 4
        elif grid[i][j] == 2:
            if dir == 1 or dir == 3:
                dir = (dir + 1) % 4
            else:
                dir = (dir + 3) % 4
        
        di, dj = moves[dir]
        ni = i + di
        nj = j + dj
        time += 1

        if not (0 <= ni < n and 0 <= nj < n ):
            return time
        
        i = ni
        j = nj

ans = 0

for i in range(n):
    for j in range(n):
        if i == 0:
            ans = max(ans, pinball(i, j, 3))
        if i == n-1:
            ans = max(ans, pinball(i, j, 1))
        if j == 0:
            ans = max(ans, pinball(i, j, 0))
        if j == n-1:
            ans = max(ans, pinball(i, j, 2))


print(ans)