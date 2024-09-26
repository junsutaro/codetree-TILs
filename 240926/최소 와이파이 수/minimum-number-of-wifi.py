n, m = map(int, input().split())
arr = list(map(int, input().split()))

idx = 0
ans = 0

while idx < n:
    # 사람이 있는 위치를 찾음
    if arr[idx] == 1:
        ans += 1
        # 와이파이를 설치한 후, 그 범위를 넘어설 때까지 idx를 증가
        idx += 2 * m + 1
    else:
        idx += 1

print(ans)