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
        # temp_sum 더해서 적용 전애 미리 체크해라... 더하고 체크하지 말고 헷갈리게 !!!!!
        # 돌다리쓰 두들겨쓰 건너스
        if temp_sum + cost > b:
            break

        temp_sum += cost
        cnt += 1

        ans = max(cnt, ans)

print(ans)