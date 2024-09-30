n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

# (a1, b1) (c1, d1) , (a2, b2) (c2, d2)
# 안겹치려면
# a1 < a2 가정하고 not (c1 > a2 and d1 > b2)
# c2 >= a2 , d2 >= b2

# a1, a2 조합 찾기
import itertools
combinations = itertools.product(range(n), range(m), range(n), range(m), range(n), range(m), range(n), range(m))


ans = -float('inf')
cnt = 0
for a1, b1, c1, d1, a2, b2, c2, d2 in combinations:
        if c1 > a2 and d1 > b2:
            continue
        if a1 >= a2 and b1 >= b2:
            continue
        if c1 >= c2 and d1 >= d2:
            continue
        
        if a1 > c1 or b1 > d1 or a2 > c2 or b2 > d2:
            continue

        temp = 0

        for i in range(a1, c1 + 1):
            for j in range(b1, d1 + 1):
                temp += arr[i][j]
        for i in range(a2, c2 + 1):
            for j in range(b2, d2 + 1):
                temp += arr[i][j]
        
        cnt += 1
        # print(a1, b1, c1, d1)
        # print(a2, b2, c2, d2)
        ans = max(ans, temp)

print(ans)