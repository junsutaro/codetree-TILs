n, m, k = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

def gravity(array):
    for j in range(n):
        temp = []
        index = n - 1

        # 아래에서부터 차곡차곡 
        for i in range(n-1, -1, -1):
            if array[i][j] != 0:
                array[index][j] = array[i][j]
                index -= 1
        
        for i in range(index+1):
            array[i][j] = 0

def explode(arr):
    for j in range(n):
        temp = []
        temp.append(arr[-1][j])
        cnt = 0
        index = n-1
        for i in range(n-2, -1, -1):
            if arr[i][j] == arr[i+1][j]:
                temp.append(arr[i][j])
            else:
                if len(temp) < m:
                    for num in temp:
                        arr[index][j] = num
                        index -= 1
                    temp = []
                    temp.append(arr[i][j])
                else:
                    temp = []
                    temp.append(arr[i][j])
            

        if len(temp) < m:
            for num in temp:
                arr[index][j] = num
                index -= 1
        
        for k in range(index+1):
            arr[k][j] = 0

def turn(arr):
    new_arr = [elem[:] for elem in arr]
    for i in range(len(arr)):
        for j in range(len(arr)):
            arr[i][j] = new_arr[len(arr) - 1 - j][i]


for _ in range(k):
    explode(arr)
    gravity
    turn(arr)
    gravity(arr)


before = sum(1 for elem in arr for num in elem if num != 0)
while True:
    explode(arr)
    gravity(arr)
    after = sum(1 for elem in arr for num in elem if num != 0)

    if before == after:
        break
    else:
        before = after



ans = sum(1 for elem in arr for num in elem if num != 0)
print(ans)