n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

def is_happy_sequence(arr, m):
    count = 1
    for i in range(len(arr) - 1):
        if arr[i] == arr[i + 1]:
            count += 1
        else:
            count = 1
        if count == m:
            return True
    return False


ans = 0



# 가로
for i in range(n):
    if is_happy_sequence(arr[i], m):
        ans += 1

for j in range(n):
    col_arr = [arr[i][j] for i in range(n)]
    if is_happy_sequence(col_arr, m):
        ans += 1

if n == 1:
    ans = 2

print(ans)