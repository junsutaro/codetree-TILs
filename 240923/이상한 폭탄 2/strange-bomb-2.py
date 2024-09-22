# 폭탄 n개 특정거리 k
n, k = map(int, input().split())

bombs = [int(input()) for _ in range(n)]
ans = -1

for i in range(n):
    for j in range(i-k, i+k+1):
        if ( j < 0 or j >= n) or ( i == j ):
            continue
        
        if bombs[i] == bombs[j]:
            ans = max(ans, bombs[i])

print(ans)