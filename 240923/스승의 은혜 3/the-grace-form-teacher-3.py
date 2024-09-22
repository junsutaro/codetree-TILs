n, b = map(int, input().split())

presents = [tuple(map(int, input().split())) for _ in range(n)]

ans = 0

for i in range(n):
    costs = []
    for j in range(n):
        if j == i:
            costs.append(presents[j][0] // 2 + presents[j][1])
        costs.append(presents[j][0] + presents[j][1])

    costs.sort()

    temp_sum = 0
    cnt = 0
    for cost in costs:
        if temp_sum + cost > b:
            ans = max(ans, cnt)
            break
        
        temp_sum += cost
        cnt += 1
        
print(ans)