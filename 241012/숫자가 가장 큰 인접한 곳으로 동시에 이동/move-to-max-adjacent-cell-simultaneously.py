n, m, t = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]
balls = [list(map(int, input().split())) for _ in range(m)]
new_balls = []
for ball in balls:
    new_balls.append([ball[0] - 1, ball[1] - 1])
balls = new_balls

# 위 아래 좌 우
di = [-1, 1, 0, 0]
dj = [0, 0, -1, 1]

def get_bigger(i, j):
    temp_max = 0
    temp_pos = None
    for k in range(4):
        ni = i + di[k]
        nj = j + dj[k]

        if not ( 0 <= ni < n and 0 <= nj < n ):
            continue

        if grid[ni][nj] > temp_max:
            temp_max = grid[ni][nj]
            temp_pos = [ni, nj]
    
    return temp_pos


for _ in range(t):
    new_balls = []
    for ball in balls:
        bi = ball[0]
        bj = ball[1]

        new_balls.append(get_bigger(bi, bj))
    
    balls = new_balls

    new_grid = [[0] * n for _ in range(n)]

    for bi, bj in balls:
        new_grid[bi][bj] += 1
    
    # for elem in new_grid:
    #     print(*elem)
    
    balls = []
    for i in range(n):
        for j in range(n):
            if new_grid[i][j] == 1:
                balls.append([i, j])




print(len(balls))