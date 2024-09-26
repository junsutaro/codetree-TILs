n, m = map(int, input().split())
arr = list(map(int, input().split()))

idx = 0
ans = 0

while idx < n:
    if arr[idx] == 0:
        idx += 1
        continue
    else:
        if idx + m < n:
            ans += 1
            idx = idx + 2*m + 1
    
print(ans)