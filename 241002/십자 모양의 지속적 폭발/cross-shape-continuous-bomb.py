n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(4)]

di = [-1, 0, 1, 0]
dj = [0, 1, 0, -1]

# 메소 익스플로전!!
def meso_explosion(si, sj):
    bomb_size = arr[si][sj]
    for dir in range(4):
        for size in range(bomb_size):
            ni = si + di[dir] * size
            nj = sj + dj[dir] * size

            if ni >= n or ni < 0 or nj >= n or nj < 0:
                continue
            
            arr[ni][nj] = 0


# 그래비티 !!
def gravity(array):
    for j in range(len(array)):
        temp = []
        index = 3

        # 아래에서부터 차곡차곡 
        for i in range(len(array)-1, -1, -1):
            if array[i][j] != 0:
                array[index][j] = array[i][j]
                index -= 1
        
        for i in range(index+1):
            array[i][j] = 0
    

        


for _ in range(m):
    col = int(input())
    col -= 1 # index니까 1 가져간다 불만없제?

    # 일단 터뜨리자!
    for i in range(n):
        if arr[i][col] != 0:
            meso_explosion(i, col)
            gravity(arr)
            break

for elem in arr:
    print(*elem)