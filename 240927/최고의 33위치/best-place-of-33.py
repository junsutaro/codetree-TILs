n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

def get_coin(a, b):
    cnt = 0
    for i in range(3):
        for j in range(3):
            if a+i >= n or b+j >= n:
                continue
            if arr[a + i][b + j] == 1:
                cnt += 1
    return cnt


ans = 0
for i in range(n-2): # n-3 인덱스까지 -> n-1 인덱스까지
    for j in range(n-2):
        ans = max(ans, get_coin(i, j))
    
print(ans)