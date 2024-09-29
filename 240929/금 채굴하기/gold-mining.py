n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

def return_mine(i, j):
    for K in range(n):
        cnt = 0
        for ni in range(i-K, i+K + 1):
            for nj in range(j-Km j+K+1):
                if ni < n and nj < n:
                    if abs(ni - i) + abs(nj - j) <= K and arr[ni][nj] == 1:
                        cnt +=1
        
        if m*cnt - (K*K + (K+1)*(K+1)) >= 0:
            return cnt
    return 0

ans = 0

for i in range(n):
    for j in range(n):
        ans = max(ans, return_mine(i, j))

print(ans)