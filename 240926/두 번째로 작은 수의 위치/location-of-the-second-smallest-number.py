n = int(input())

nums = list(map(int, input().split()))

min1 = float('inf')
min2 = float('inf')


ans = -1

for num in nums:
    if num < min1:
        min2 = min1
        min1 = num
    elif min1 < num < min2:
        min2 = num

if min2 == float('inf'):
    ans = -1
else:
    cnt_2 = 0
    for i in range(n):
        if nums[i] == min2:
            ans = i + 1
            cnt_2 += 1
            if cnt_2 > 1:
                ans = -1
                break

                

print(ans)