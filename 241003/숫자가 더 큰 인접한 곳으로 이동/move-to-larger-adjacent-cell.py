n, si, sj = map(int, input().split())

si -= 1
sj -= 1

arr = [list(map(int, input().split())) for _ in range(n)]


di = [-1, 1, 0, 0]
dj = [0, 0, -1, 1]

def find_way(arr, i, j):
    ans = []
    ans.append(arr[i][j])

    while True:
        moved = False

        for k in range(4):
            ni = i + di[k]
            nj = j + dj[k]

            if ni >= n or ni < 0 or nj >= n or nj < 0:
                continue

            if arr[ni][nj] > arr[i][j]:
                i = ni
                j = nj
                ans.append(arr[i][j])
                moved = True
                break

        if moved == False:
            break

    return ans

print(*find_way(arr, si, sj))