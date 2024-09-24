n = int(input())
nums = list(map(int, input()))

ans = 0

# 모든자리 찾아서 0이면 1넣자
for i in range(n):
    if nums[i] == 1:
        continue
    else:
        nums[i] = 1
        # print(nums)
        # 새로 만들어진 배열에서 1찾자
        temp_dist = float('inf')

        for j in range(n-1):
            if nums[j] == 1:
                for k in range(j+1, n):
                    if nums[k] == 1:
                        temp_dist = min(temp_dist, k - j)
                        # print(j, k)
                        break;
        ans = max(temp_dist, ans)
        nums[i] = 0


print(ans)