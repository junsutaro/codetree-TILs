n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
r, c, m1, m2, m3, m4, dir = map(int, input().split())

arr_copy = [elem[:] for elem in arr]

# for elem in arr_copy:
#     print(*elem)
# print()

r -= 1
c -= 1

# dir = 0 반시계, dir = 1 시계

cur_dir = 0

di = [-1, -1, 1, 1]
if dir == 0:
    dj = [1, -1, -1, 1]
else:
    dj = [-1, 1, 1, -1]

i = r; j = c

while cur_dir < 4:

    if cur_dir == 0:
        dist = m1
    elif cur_dir == 1:
        dist = m2
    elif cur_dir == 2:
        dist = m3
    elif cur_dir == 3:
        dist = m4

    for _ in range(dist):
        ni = i + di[cur_dir]
        nj = j + dj[cur_dir]

        arr[ni][nj] = arr_copy[i][j]

        i = ni
        j = nj
    
    cur_dir += 1

for lst in arr:
    print(*lst)