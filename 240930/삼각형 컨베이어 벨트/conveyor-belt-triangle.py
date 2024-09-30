n, t = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(3)]

origin_arr = []
for elem in arr:
    for num in elem:
        origin_arr.append(num)
# print(origin_arr)

new_arr = [0] * (3 * n)

for i in range(3*n):
    new_i = (i + t) % (3 * n) 
    new_arr[new_i] = origin_arr[i]

ans = []

for _ in range(3):
    temp = []
    for i in range(n):
        temp.append(new_arr.pop(0))
    print(*temp)