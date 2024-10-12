n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

grid = [[ [x] for x in row ] for row in grid]
moves = list(map(int, input().split()))

# for elem in grid:
#     print(*elem)

def find_num(num):
    for i in range(n):
        for j in range(n):
            if num in grid[i][j]:
                return i, j

di = [-1, -1, -1, 0, 1, 1, 1, 0]
dj = [-1, 0, 1, 1, 1, 0, -1, -1]

def find_target(i, j):
    temp_max = 0
    mi, mj = 0, 0
    for k in range(8):
        ni = i + di[k]
        nj = j + dj[k]

        if not ( 0 <= ni < n and 0 <= nj < n ):
            continue
        
        if grid[ni][nj]:
            if max(grid[ni][nj]) > temp_max:
                mi, mj = ni, nj
                temp_max = max(grid[ni][nj])
    
    return mi, mj

        
for num in moves:
    i, j = find_num(num)
    ni, nj = find_target(i, j)

    now_index = grid[i][j].index(num)
    

    now = [x for idx, x in enumerate(grid[i][j]) if idx >= now_index]
    
    grid[ni][nj].extend(now)

    for number in now:
        grid[i][j].remove(number)


for row in grid:
    for elem in row:
        if elem:
            print(*elem[::-1])
        else:
            print('None')