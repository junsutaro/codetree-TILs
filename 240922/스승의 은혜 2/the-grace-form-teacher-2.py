n, b = map(int, input().split())
arr = [int(input()) for _ in range(n)]

ans = 0;

for i in range(n):
    temp_costs = arr.copy()
    temp_costs[i] = temp_costs[i] // 2
    temp_costs.sort()



    temp_sum = 0
    cnt = 0
    for j in range(n):
        cnt += 1
        temp_sum += temp_costs[j]

        if temp_sum > b:
            ans = max(ans, cnt - 1)
            break
        


print(cnt)