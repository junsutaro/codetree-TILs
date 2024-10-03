n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

def explode(arr, i, j): # 인덱스로 사용
    di = [-1, 0, 1, 0]
    dj = [0, 1, 0, -1]

    size = arr[i][j]
    
    if size < 0:
        return
    
    for dir in range(4):
        for damage in range(size):
            ni = i + di[dir]*damage
            nj = j + dj[dir]*damage

            if 0 <= ni < n and 0 <= nj < n:
                arr[ni][nj] = 0

def gravity(arr):
    for j in range(n):
        index = n-1
        for i in range(n-1, -1, -1):
            if arr[i][j] != 0:
                arr[index][j] = arr[i][j]
                index -= 1
            
        for i in range(index, -1, -1):
            arr[i][j] = 0

def find_ans(arr):
    cnt = 0

    for i in range(n):
        j = 0
        temp_cnt = 1
        while True:
            if j == n-1:
                if temp_cnt == 2:
                    cnt += 1

                break

            if arr[i][j] == 0:
                j += 1
                continue


            if arr[i][j] == arr[i][j+1]:
                temp_cnt += 1
            
            else:
                if temp_cnt == 2:
                    cnt += 1

                temp_cnt = 1
            
            j += 1

    for j in range(n):
        i = 0
        temp_cnt = 1
        while True:
            if i == n-1:
                if temp_cnt == 2:
                    cnt += 1

                break

            if arr[i][j] == 0:
                i += 1
                continue


            if arr[i][j] == arr[i+1][j]:
                temp_cnt += 1
            
            else:
                if temp_cnt == 2:
                    cnt += 1

                temp_cnt = 1
            
            i += 1

    return cnt

ans = 0

for i in range(n):
    for j in range(n):
        new_arr = [elem[:] for elem in arr]
        if arr[i][j] != 0:
            explode(new_arr, i, j)
            gravity(new_arr)
            ans = max(ans, find_ans(new_arr))

print(ans)