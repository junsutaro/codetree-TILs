n = int(input())
arr = list(map(int, input().split()))


# 3개 골라 나올 곱중 최대

# 양수 3개보다 많으면 큰거 3개

# 양수 1개 ,음수 2개이상 : 절대값 큰거 3개

# 양수 1개에 음수 1개 이하 -> 0 ( 필요 ㄴㄴ, 0 있으면에서 걸림 )

# 양수 2개 : 절대값 작은거 3개 ( 0 있으면 0 )

# 양수 0개 : 작은거 3개 ( 0 있으면 0 )

arr.sort()

negative, zero, positive = 0, 0, 0
for num in arr:
    if num > 0: positive += 1
    if num < 0: negative += 1
    else: zero += 1

ans = None

if positive >= 3:
    ans = max(arr[0] * arr[1] * arr[-1], arr[-1] * arr[-2] * arr[-3])
elif positive == 1:
    if negative >= 2:
        ans = arr[-1] * arr[1] * arr[2]
    else:
        ans = 0
elif positive == 2:
    if negative >= 1:
        ans = max(arr[-1] * arr[-2] * arr[0], arr[0] * arr[1] * arr[2])
    else:
        ans = 0
else:
    ans = 0

print(ans)