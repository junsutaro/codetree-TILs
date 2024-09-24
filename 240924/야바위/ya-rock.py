n = int(input())
inputs = [tuple(map(int, input().split())) for _ in range(n)]

max_val = 0
ans = 0

for i in range(1, 4):
    cups = [False] * 4
    cups[i] = True
    
    cnt = 0

    # a번 b번 교환 후 c 열어서 조약돌 있으면 점수
    for elem in inputs:
        a, b, c = elem
        cups[a], cups[b] = cups[b], cups[a]

        if cups[c] == True:
            cnt += 1

    # print(cnt)

    if cnt >= max_val:
        max_val = cnt
        ans = i
        
print(ans)