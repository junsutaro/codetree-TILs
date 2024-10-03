n, m, k = map(int, input().split())
k -= 1 # 인덱스화
arr = [list(map(int, input().split())) for _ in range(n)]

# block : for j in range(k, k+m) i가 n-1 -1 -1 로 돌면서 True? 빢! break

for i in range(n-1, -1, -1):
    can = True
    for j in range(k, k+m):
        # 여기서 걸리면 i 바꾸러 감
        if arr[i][j] == 1:
            can = False
            break

    if can == False:
        continue
    
    # 안걸리고 도착하면 걍 끝냄
    for j in range(k, k+m):
        arr[i][j] = 1

    break

for elem in arr:
    print(*elem)