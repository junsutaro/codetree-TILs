n = int(input())
ppl = list(input().split())

for i in range(n):
    ppl[i] = ord(ppl[i]) - 65


ans = 0
for i in range(n-1):
    # 그 자리면 바꿀 필요 X
    if i != ppl[i]: # i가 1인데 ppl[i]가 1이 아니다?
        for j in range(i+1, n): # i보다 큰거 쭉 돌면서 ppl[j] = i, ppl[i] = j 인거 찾아
            if ppl[j] == i and ppl[i] == j:
                ppl[i], ppl[j] = ppl[j], ppl[i]
                ans += 1

        for j in range(i+1, n):
            # 그런거 없으면 i 갖고있는 곳 가서 뺏어와
            if ppl[j] == i:
                # 지금 ppl[i]가 가진놈 가져가라 그리고 내놔라
                ppl[j], ppl[i] = ppl[i], ppl[j]

                ans += 1


print(ans)