def rotate_90_clockwise(arr):
    return [[arr[3-j][i] for j in range(4)] for i in range(4)]

def rotate_90_counterclockwise(arr):
    return [[arr[j][3-i] for j in range(4)] for i in range(4)]

def rotate_180(arr):
    return [[arr[3-i][3-j] for j in range(4)] for i in range(4)]

def move_left(arr):
    new_arr = [[0] * 4 for _ in range(4)]
    for i in range(4):
        temp = []
        for j in range(4):
            if arr[i][j] != 0:
                temp.append(arr[i][j])
        
        # 숫자 합치기
        k = 0
        while k < len(temp) - 1:
            if temp[k] == temp[k + 1]:
                temp[k] *= 2
                del temp[k + 1]
            k += 1
        
        # 합친 숫자 왼쪽으로 이동
        for j in range(len(temp)):
            new_arr[i][j] = temp[j]
    
    return new_arr

arr = [list(map(int, input().split())) for _ in range(4)]
dir = input()

# 방향에 따라 회전
if dir == 'U':
    arr = rotate_90_clockwise(arr)
elif dir == 'R':
    arr = rotate_180(arr)
elif dir == 'D':
    arr = rotate_90_counterclockwise(arr)

# 왼쪽으로 이동하는 함수 호출
arr = move_left(arr)

# 다시 원래 방향으로 되돌림
if dir == 'U':
    arr = rotate_90_counterclockwise(arr)
elif dir == 'R':
    arr = rotate_180(arr)
elif dir == 'D':
    arr = rotate_90_clockwise(arr)

# 결과 출력
for elem in arr:
    print(*elem)