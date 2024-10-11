n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

# 오른, 왼, 아래, 위
moves = ((0, 1), (0, -1), (1, 0), (-1, 0))


def pinball(i, j, dir):
    time = 1

    while True:
        # print(time, i, j)

        if grid[i][j] == 1:
            dir = 3 - dir
        elif grid[i][j] == 2:
            dir = (dir + 2) % 4
        
        di, dj = moves[dir]
        i = i + di
        j = j + dj
        time += 1

        if not (0 <= i < n and 0 <= j < n ):
            return time


ans = 0

for i in range(n):
    ans = max(ans, pinball(i, 0, 0))
    ans = max(ans, pinball(i, n-1, 1))
    ans = max(ans, pinball(0, i, 2))
    ans = max(ans, pinball(n-1, i, 3))


print(ans)