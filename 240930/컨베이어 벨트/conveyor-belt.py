n, t = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(2)]

# 0 1 2
# 3 4 5

# 각 위치 = x // n + x % n
new_arr = [[0] * n for _ in range(2)]

100

for i in range(2*n):
    new_i = (i + t) % (2*n) // n
    new_j = (i + t) % n
    origin_i = i % (2*n) // n
    origin_j = i % n
    new_arr[new_i][new_j] = arr[origin_i][origin_j]

for elem in new_arr:
    print(*elem)