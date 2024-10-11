n, m, r, c = map(int, input().split())

# m += 1
# 인덱스화
r -= 1
c -= 1

grid = [[0] * n for _ in range(n)]
grid[r][c] = 1

# 북 서 남 동
dirs = [(-1, 0), (0, -1), (1, 0), (0, 1)]


def make_bomb(time, i, j):
    # grid에 대한 로직
    grid[i][j] = 1

    for k in range(4):
        di, dj = dirs[k]
        ni = i + di * time
        nj = j + dj * time

        if not ( 0 <= ni < n and 0 <= nj < n ):
            continue
        
        grid[ni][nj] = 1



for time in range(1, m+1):
    
    bombs = []

    for i in range(n):
        for j in range(n):
            # 폭탄 찾아서 make bomb
            if grid[i][j] == 1:
                bombs.append([i, j])
    
    for ii, jj in bombs:
        make_bomb(time, ii, jj)

    # print()
    # for elem in grid:
    #     print(*elem) 

ans = sum(sum(elem) for elem in grid)
print(ans)