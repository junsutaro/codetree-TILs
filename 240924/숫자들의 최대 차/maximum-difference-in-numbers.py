n, k = map(int, input().split())
nums = [int(input()) for _ in range(n)]

nums.sort()

left = 0
ans = 0

for right in range(n):

    while((nums[right] - nums[left]) > k):
        left += 1
    
    ans = max(ans, right - left + 1)

print(ans)

# ans = 0
# for i in range(n):
#     cnt = 1
#     for j in range(i + 1, n):
#         if nums[j] - nums[i] <= k:
#             cnt += 1
#         else:
#             break
#     ans = max(cnt, ans)

# print(ans)