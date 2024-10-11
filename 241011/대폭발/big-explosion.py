n, m, r, c = map(int, input().split())

# 인덱스화
r -= 1
c -= 1

grid = [[0] * n for _ in range(n)]
grid[r][c] = 1

# 북 서 남 동
dirs = [(-1, 0), (0, -1), (1, 0), (0, 1)]

def make_bomb(time, i, j):
    for k in range(4):
        di, dj = dirs[k]
        ni = i + di * 2**(time-1)
        nj = j + dj * 2**(time-1)

        if 0 <= ni < n and 0 <= nj < n and grid[ni][nj] == 0:
            grid[ni][nj] = 1  # 새로운 폭탄 생성

# m번의 시간 동안 폭탄 확산
for time in range(1, m + 1):
    bombs = []

    # 현재 폭탄이 있는 위치를 탐색
    for i in range(n):
        for j in range(n):
            if grid[i][j] == 1:
                bombs.append([i, j])

    # 폭탄 확산
    for i, j in bombs:
        make_bomb(time, i, j)

# 최종 폭탄의 개수를 계산
ans = sum(sum(row) for row in grid)
print(ans)