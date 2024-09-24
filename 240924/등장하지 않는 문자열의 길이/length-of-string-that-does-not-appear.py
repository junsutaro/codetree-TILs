n = int(input())
strs = list(input())

ans = 0

# idx 0부터 차례대로 해보죠 ?
for i in range(n-1):
    
    # i번째 인덱스부터 출바을~
    for j in range(i+1, n):
        if (strs[j] == strs[i]):
            cnt = 0
            # 같은거 찾으면 거기서 다시 출발
            for k in range(0 , n-j):
                if strs[i+k] == strs[j+k]:
                    cnt += 1
                else:
                    break
            ans = max(cnt, ans)
    
print(ans + 1)