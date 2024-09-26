n = int(input())
nums = list(map(int, input().split()))


# 3개 골라 나올 곱중 최대

# 양수 3개보다 많으면 큰거 3개

# 양수 1개 ,음수 2개이상 : 절대값 큰거 3개

# 양수 1개에 음수 1개 이하 -> 0 ( 필요 ㄴㄴ, 0 있으면에서 걸림 )

# 양수 2개 : 절대값 작은거 3개 ( 0 있으면 0 )

# 양수 0개 : 작은거 3개 ( 0 있으면 0 )

pls = []
mns = []
zeros = []
for num in nums:
    if num > 0: pls.append(num)
    if num < 0: mns.append(num)
    else: zeros.append(num)

pls.sort()
mns.sort()

ans = None

if n == 3:
    ans = nums[0] * nums[1] * nums[2]
elif len(pls) >= 3:
    ans = max(pls[-1] * pls[-2] * pls[-3], mns[0] * mns[1] * pls[-1])
elif len(pls) == 1 and len(mns) >= 2:
    ans = mns[0] * mns[1] * pls[-1]

else:
    if zeros:
        ans = 0
    else:
        if len(pls) == 2:
            ans = pls[0] * pls[1] * mns[-1]
        if len(pls) == 0:
            ans = mns[-1] * mns[-2] * mns[-3]
    
print(ans)