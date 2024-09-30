n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

# (a1, b1) (c1, d1) , (a2, b2) (c2, d2)
# 안겹치려면
# a1 < a2 가정하고 not (c1 > a2 and d1 > b2)
# c2 >= a2 , d2 >= b2

for i in range(n-1):
    for j in range(i+1, n):
        continue

# a1, a2 조합 찾기
import itertools
abcombs = list(itertools.product(range(n), repeat=2))

ans = -float('inf')

# a2, a2 찾았으면 b1, b2도 찾아야 함.. 일단찾자
for comb in abcombs:
    a1, a2 = comb
    for b1 in range(m):
        for b2 in range(m):
            # a1, b1 a2, b2 찾았습니다~
            # 그러면 c1, d1 이랑 c2, d2 찾아야겠죠
            for c1 in range(a1, n):
                for d1 in range(b1, m):
                    # c1, d1 찾았으니까 이제 c2, d2
                    for c2 in range(a2, n):
                        for d2 in range(b2, m):
                            if a1 == a2 and b1 == b2:
                                continue
                            if (c1 > a2 and d1 > b2):
                                continue
                            # print(a1, b1, ',' ,c1, d1)
                            # print(a2, b2, ',' ,c2, d2)
                            temp = 0
                            for i in range(a1, c1+1):
                                for j in range(b1, d1+1):
                                    temp += arr[i][j]
                            
                            for i in range(a2, c2+1):
                                for j in range(b2, d2+1):
                                    temp += arr[i][j]
                            
                            ans = max(ans, temp)
                            # print(temp)
                            # print()

print(ans)