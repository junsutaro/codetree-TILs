n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
r, c = map(int, input().split())

r -= 1
c -= 1

di = [-1, 0, 1, 0]
dj = [0, 1, 0, -1]

bomb_size = arr[r][c]

def bomb(si, sj): # 인덱스입니다
    arr[r][c] = 0
    for k in range(4):
        for size in range(bomb_size):
            ni = si + di[k]*size
            nj = sj + dj[k]*size

            if 0 > ni or ni >= n or 0 > nj or nj >= n:
                continue
            
            arr[ni][nj] = 0
    

bomb(r, c)

ans = [[0] * n for _ in range(n)]

for j in range(n):
    temp = []
    for i in range(n-1, -1, -1):
        if arr[i][j] != 0:
            temp.append(arr[i][j])

    i_idx = n

    for k in range(len(temp)):
        i_idx -= 1
        ans[i_idx][j] = temp[k]

for elem in ans:
    print(*elem)