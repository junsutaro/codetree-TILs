import itertools

# 누적 합 테이블을 생성하는 함수
def compute_prefix_sum(grid, n, m):
    prefix_sum = [[0] * (m + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            prefix_sum[i][j] = grid[i-1][j-1] + prefix_sum[i-1][j] + prefix_sum[i][j-1] - prefix_sum[i-1][j-1]
    
    return prefix_sum

# (x1, y1)와 (x2, y2) 좌표 사이의 합을 O(1)로 계산하는 함수
def rect_sum(prefix_sum, x1, y1, x2, y2):
    return (prefix_sum[x2+1][y2+1] - prefix_sum[x1][y2+1] - prefix_sum[x2+1][y1] + prefix_sum[x1][y1])

n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

# 누적 합 테이블 계산
prefix_sum = compute_prefix_sum(grid, n, m)

ans = -float('inf')

combinations = itertools.product(range(n), range(m), range(n), range(m), range(n), range(m), range(n), range(m))

for a1, b1, c1, d1, a2, b2, c2, d2 in combinations:
    if c1 >= a2 and d1 >= b2:
        continue
    if a1 >= a2 and b1 >= b2:
        continue
    if c1 >= c2 and d1 >= d2:
        continue
    if a1 > c1 or b1 > d1 or a2 > c2 or b2 > d2:
        continue
    
    temp_sum = rect_sum(prefix_sum, a1, b1, c1, d1) + rect_sum(prefix_sum, a2, b2, c2, d2)
    ans = max(ans, temp_sum)

print(ans)