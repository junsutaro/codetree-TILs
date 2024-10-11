n, m, t = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]
balls = [tuple(map(lambda x: int(x) - 1, input().split())) for _ in range(m)]  # 0 기반으로 변환

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
                if temp_pos is None or (ni, nj) < temp_pos:
                    temp_pos = (ni, nj)

    return temp_pos

for _ in range(t):
    new_positions = set() 
    for ball in balls:
        bi, bj = ball
        new_pos = get_bigger(bi, bj)
        new_positions.add(new_pos)

    balls = list(new_positions)

print(len(balls))