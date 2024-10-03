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

            if ni >= n or ni < 0 or nj >= n or nj < 0:
                continue

            arr[ni][nj] = 0

def gravity(arr):
    for j in range(n):
        non_zero_elements = []
        for i in range(n):
            if arr[i][j] != 0:
                non_zero_elements.append(arr[i][j])
        # Apply gravity: fill column with non-zero elements from the bottom
        for i in range(n - len(non_zero_elements)):
            arr[i][j] = 0
        for i in range(n - len(non_zero_elements), n):
            arr[i][j] = non_zero_elements[i - (n - len(non_zero_elements))]

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