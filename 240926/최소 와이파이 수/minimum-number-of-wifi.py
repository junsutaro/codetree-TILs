n, m = map(int, input().split())
arr = list(map(int, input().split()))

idx = 0
ans = 0

while idx < n:
    if arr[idx] == 1:
        if idx + m >= n:
            ans += 1
            break
        if idx + m < n:
            ans += 1
            idx = idx + 2*m + 1
    else:
        idx += 1
    
print(ans)