n, m, k = map(int, input().split())
k -= 1 # 인덱스화
arr = [list(map(int, input().split())) for _ in range(n)]


# block : for j in range(k, k+m) i가 n-1 -1 -1 로 돌면서 True? 빢! break

for i in range(1, n):
    can = False
    for j in range(k, k+m):

        # 내려가면서 처음 걸리면?
        if arr[i][j] == 1:
            can = True
            for l in range(k, k+m):
                arr[i-1][l] = 1
            
    if can:
        break


for elem in arr:
    print(*elem)