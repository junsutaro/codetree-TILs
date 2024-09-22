n, b = map(int, input().split())
arr = [int(input()) for _ in range(n)]

ans = 0;

for i in range(n):
    temp_costs = arr.copy()
    temp_costs[i] = temp_costs[i] // 2
    temp_costs.sort()



    temp_sum = 0
    cnt = 0
    for cost in temp_costs:
        if temp_sum + cost > b:
            break

        temp_sum += cost
        cnt += 1

        ans = max(cnt, ans)

print(ans)