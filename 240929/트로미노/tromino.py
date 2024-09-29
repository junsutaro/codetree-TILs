n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

blocks = [
    [(0, 0), (1, 0), (1, 1)],  # ㄱ 모양
    [(0, 0), (0, 1), (1, 1)],  # ㄴ 모양
    [(0, 0), (0, 1), (0, 2)],  # ㅡ 모양
    [(0, 0), (1, 0), (2, 0)],  # ㅣ 모양
    [(0, 0), (1, 0), (0, 1)], 
    [(1, 1), (0, 1), (1, 0)], 
]

ans = 0

# block in blocks 돌면서 max return 하는 함수
def find_max(i, j, block):
    temp = 0
    for x, y in block:
        nx, ny = i+x, j+y
        if nx >= n or ny >= m or nx < 0 or ny < 0:
            return 0
        temp += arr[nx][ny]
    return temp
        

for i in range(n):
    for j in range(m):
        for block in blocks:
            ans = max(ans, find_max(i, j, block))

print(ans)