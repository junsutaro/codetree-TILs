n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

def return_mine(i, j):
    max_cnt = 0
    for K in range(n*2):
        cnt = 0
        for ni in range(i-K, i+K+1):
            for nj in range(j-K, j+K+1):
                if 0 <= ni < n and 0 <= nj < n:
                    if abs(ni - i) + abs(nj - j) <= K and arr[ni][nj] == 1:
                        cnt +=1
        
        cost = K*K + (K+1) * (K+1)
        if m*cnt >= cost:
            max_cnt = max(max_cnt, cnt)
    return max_cnt

ans = 0

for i in range(n):
    for j in range(n):
        ans = max(ans, return_mine(i, j))

print(ans)