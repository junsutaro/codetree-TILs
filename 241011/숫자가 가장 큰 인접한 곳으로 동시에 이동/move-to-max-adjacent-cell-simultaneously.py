n, m, t = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]
balls = [list(map(int, input().split())) for _ in range(m)]

# 위 아래 좌 우
di = [-1, 1, 0, 0]
dj = [0, 0, -1, 1]

def get_bigger(i, j):
    temp_max = -1
    temp_pos = None
    for k in range(4):
        ni = i + di[k]
        nj = j + dj[k]

        if 0 <= ni < n and 0 <= nj < n:
            if grid[ni][nj] > temp_max:
                temp_max = grid[ni][nj]
                temp_pos = (ni, nj)
            elif grid[ni][nj] == temp_max:
                # 우선순위 방향 적용
                if temp_pos is None or (ni, nj) < temp_pos:
                    temp_pos = (ni, nj)

    return temp_pos



for _ in range(t):
    new_balls = set()
    for ball in balls:
        bi = ball[0]
        bj = ball[1]

        new_balls.add(get_bigger(bi, bj))
    
    balls = new_balls

print(len(balls))