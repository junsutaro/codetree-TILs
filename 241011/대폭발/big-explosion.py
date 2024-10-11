n, m, r, c = map(int, input().split())

# 인덱스화
r -= 1
c -= 1

grid = [[0] * n for _ in range(n)]
grid[r][c] = 1

bombs = [[r, c]]
# 북 서 남 동
dirs = [(-1, 0), (0, -1), (1, 0), (0, 1)]

def make_bomb(time, i, j):
    new_bombs = []
    for k in range(4):
        di, dj = dirs[k]
        ni = i + di * 2**(time-1)
        nj = j + dj * 2**(time-1)

        if 0 <= ni < n and 0 <= nj < n and grid[ni][nj] == 0:
            grid[ni][nj] = 1  # 새로운 폭탄 생성
            new_bombs.append((ni, nj))

    return new_bombs

# m번의 시간 동안 폭탄 확산
for time in range(1, m + 1):
    new_bombs = []
    # 폭탄 확산
    for i, j in bombs:
        new_bombs.extend(make_bomb(time, i, j))
    
    bombs.extend(new_bombs)

# 최종 폭탄의 개수를 계산
ans = sum(sum(row) for row in grid)
print(ans)