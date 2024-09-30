# from collections import defaultdict

n, m, q = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
moves = [list(input().split()) for _ in range(q)]

def blowing(arr, i, direction):
    target_arr = arr[i-1][:]

    if direction == 'L':
        for j in range(m):
            arr[i-1][j] = target_arr[(j-1+m) % m]

    else:
        for j in range(m):
            arr[i-1][j] = target_arr[(j+1+m) % m]

    # print()
    # for elem in arr:
    #     print(*elem)

    
# for elem in arr:
#     print(*elem)

def is_up_spread(i): # i가 3이면 2행 3행 봐야함. i가 1이면 0행 1행 봐야함
    if i == 1:
        return False

    for j in range(m):
        if arr[i-1][j] == arr[i-2][j]:
            # print('위로간다!')
            return True
            
    return False

def is_down_spread(i): # i가 3이면 2랑 3이랑 비교 -> i가 6이면 5랑 6이랑 비교(불가)
    if i == n:
        return False

    for j in range(m):
        if arr[i-1][j] == arr[i][j]:
            # print('아래로간다!!')
            return True

    return False


for move in moves:
    # 일단 한번 움직이자
    i = int(move[0])
    direction = move[1]
    blowing(arr, i, direction)


    up_index = i
    up_dir = direction


    while True:
        if is_up_spread(up_index):
            up_index -= 1
            if up_dir == 'L':
                up_dir = 'R'
            else:
                up_dir = 'L'
            blowing(arr, up_index, up_dir)
        else:
            # print('위로 끝')
            break
            

    down_index = i
    down_dir = direction

    while True:
        if is_down_spread(down_index):
            down_index += 1
            if down_dir == 'L':
                down_dir = 'R'
            else:
                down_dir = 'L'
            blowing(arr, down_index, down_dir)
        else:
            # print('아래로 끝')
            break
            
for elem in arr:
    print(*elem)