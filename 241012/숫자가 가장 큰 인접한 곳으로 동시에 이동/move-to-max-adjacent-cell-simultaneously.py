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

from collections import Counter

def get_bigger(i, j):
    temp_max = -1
    temp_pos = None
    for k in range(4):
        ni = i + di[k]
        nj = j + dj[k]

        if not (0 <= ni < n and 0 <= nj < n):
            continue

        if grid[ni][nj] > temp_max:
            temp_max = grid[ni][nj]
            temp_pos = (ni, nj)
    
    return temp_pos


for _ in range(t):
    new_balls = []  # 리스트로 새로운 위치를 저장
    for ball in balls:
        bi = ball[0]
        bj = ball[1]

        next_pos = get_bigger(bi, bj)
        if next_pos is not None:
            new_balls.append(next_pos)  # 새로운 위치를 리스트에 추가

    # 위치별로 구슬 개수 카운팅
    counter = Counter(new_balls)

    # 1개만 있는 위치의 구슬들만 다시 리스트에 저장
    balls = [list(pos) for pos, count in counter.items() if count == 1]

print(len(balls))