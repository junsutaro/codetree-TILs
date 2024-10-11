n, m, k = map(int, input().split())
apples = [map(int, input().split()) for _ in range(m)]
moves = [input().split() for _ in range(k)]


# 9 - 사과, 3 - 벽, 1 - 뱀 

grid = [[0] * (n+2) for _ in range(n+2)]
for ai, aj in apples:
    grid[ai][aj] = 9

for i in range(n+2):
    for j in range(n+2):
        if i == 0 or i == n+1 or j == 0 or j == n+1:
            grid[i][j] = 3

dirs = {
    'L': (0, -1),
    'R': (0, 1),
    'U': (-1, 0),
    'D': (1, 0),
}

snakes = [[1, 1]]

i, j = 1, 1

time = 0

for elem in moves:
    # 탈출조건?
    game_end = False
    
    di, dj = dirs[elem[0]]
    dist = int(elem[1])

    for _ in range(dist):
        time += 1
        ni = i + di
        nj = j + dj
        
        if grid[ni][nj] == 3:
            game_end = True
            break

        ## 끝 안나면
        if grid[ni][nj] == 9:
            snakes.append([ni, nj])
            grid[ni][nj] = 0
        
        elif grid[ni][nj] == 0:
            if [ni, nj] not in snakes:
                snakes.append([ni, nj])
                snakes.pop(0)
            
            else:
                if [ni, nj] != snakes[0]:
                    game_end = True
                    break

        i = ni
        j = nj

        # print(snakes)
        # grid2 = [elem[:] for elem in grid]
        # print()
        # for si, sj in snakes:
        #     grid2[si][sj] = 1
        # for elem in grid2:
        #     print(*elem)

    if game_end:
        break

ans = time
print(ans)