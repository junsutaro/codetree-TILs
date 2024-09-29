n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

blocks = [
    [(0, 0), (1, 0), (1, 1)],  # 기본 ㄱ 모양
    [(0, 0), (0, 1), (1, 1)],  # 기본 ㄴ 모양
    [(0, 0), (0, 1), (0, 2)]   # 기본 ㅡ 모양 (회전시 ㅣ 모양도 포함됨)
]

def rotate_and_reflect(block):
    variants = []
    for _ in range(2):  # 원래와 대칭 모양
        for _ in range(4):  # 4번 회전
            variants.append(block)
            block = [(y, -x) for x, y in block]  # 시계방향으로 90도 회전
        block = [(x, -y) for x, y in block]  # x축 대칭
    return variants

def sum_block(i, j, block):
    total = 0
    for x, y in block:
        ni, nj = i + x, j + y
        if 0 <= ni < n and 0 <= nj < m:
            total += arr[ni][nj]
        else:
            return 0  # 블록이 그리드를 벗어나면 0
    return total

# 모든 블록의 회전 및 대칭 경우 생성
all_blocks = []
for block in blocks:
    all_blocks.extend(rotate_and_reflect(block))

# 답을 저장할 변수
ans = 0

# 그리드 내 모든 좌표에서 가능한 블록의 합을 계산
for i in range(n):
    for j in range(m):
        for block in all_blocks:
            ans = max(ans, sum_block(i, j, block))

print(ans)