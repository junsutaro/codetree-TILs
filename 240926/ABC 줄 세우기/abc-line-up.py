n = int(input())
ppl = list(input().split())

for i in range(n):
    ppl[i] = ord(ppl[i]) - 65

ans = 0
while True:
    isChange = False
    for i in range(n-1):
        if ppl[i] > ppl[i+1]:
            ppl[i], ppl[i+1] = ppl[i+1], ppl[i]
            ans += 1
            isChange = True
    
    if not isChange:
        break
    
print(ans)