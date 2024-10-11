n, m, r, c = map(int, input().split())

# 인덱스화
r -= 1
c -= 1

grid = [[0] * n for _ in range(n)]
grid[r][c] = 1

# 북 서 남 동
dirs = [(-1, 0), (0, -1), (1, 0), (0, 1)]

# 처음 폭탄 위치 저장
bombs = [[r, c]]  # 폭탄의 초기 위치

def make_bomb(time, i, j):
    new_bombs = []
    for k in range(4):
        di, dj = dirs[k]
        ni = i + di * time
        nj = j + dj * time

        if 0 <= ni < n and 0 <= nj < n and grid[ni][nj] == 0:
            grid[ni][nj] = 1
            new_bombs.append([ni, nj])  # 새로운 폭탄 좌표 추가
    return new_bombs

# m번의 시간 동안 폭탄 확산
for time in range(1, m + 1):
    new_bombs = []
    for i, j in bombs:
        # 기존 폭탄도 다시 터지도록 처리
        new_bombs.extend(make_bomb(time, i, j))
    bombs.extend(new_bombs)  # 새로 생긴 폭탄 좌표도 추가하여 반복 폭발 가능하게 함

# 최종 폭탄의 개수를 계산
ans = sum(sum(row) for row in grid)
print(ans)