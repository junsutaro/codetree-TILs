n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

blocks = [
    [(0, 0), (1, 0), (1, 1)],  # ㄱ 모양
    [(0, 0), (0, 1), (1, 0)],  # ㄴ 모양
    [(0, 0), (0, 1), (0, 2)],  # ㅡ 모양
    [(0, 0), (1, 0), (2, 0)],  # ㅣ 모양
    [(0, 0), (1, 0), (0, 1)],  # 「 모양
    [(1, 1), (0, 1), (1, 0)],  # ㅁ 모양 (정사각형 부분)
]

ans = 0

# 블록이 격자를 벗어나지 않는지 확인하고, 합을 계산하는 함수
def find_max(i, j, block):
    temp = 0
    for x, y in block:
        nx, ny = i + x, j + y
        if nx >= n or ny >= m or nx < 0 or ny < 0:  # 격자를 벗어나는 경우
            return 0
        temp += arr[nx][ny]
    return temp

# 모든 위치에서 각 블록에 대해 합을 계산하여 최대값을 찾음
for i in range(n):
    for j in range(m):
        for block in blocks:
            ans = max(ans, find_max(i, j, block))

print(ans)