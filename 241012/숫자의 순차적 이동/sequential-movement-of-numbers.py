n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

dir = ((0, 1), (-1, 1), (-1, 0), (-1, -1), (0, -1), (1, -1), (1, 0), (1, 1))

for _ in range(m):
    for num in range(1, n * n + 1):
        si = 0
        sj = 0
        find = False
        for i in range(n):
            if find:
                break
            for j in range(n):
                if grid[i][j] == num:
                    si = i
                    sj = j
                    find = True
                    break
                    
        temp_max = -1
        mi = i
        mj = j
        for k in range(8):
            ni = si + dir[k][0]
            nj = sj + dir[k][1]
            
            if not ( 0 <= ni < n and 0 <= nj < n ):
                continue

            if grid[ni][nj] > temp_max:
                temp_max = grid[ni][nj]
                mi = ni
                mj = nj
        
        grid[si][sj], grid[mi][mj] = grid[mi][mj], grid[si][sj]

for elem in grid:
    print(*elem)