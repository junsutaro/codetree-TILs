n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

def explode(arr, i, j):
    di = [-1, 0, 1, 0]
    dj = [0, 1, 0, -1]
    size = arr[i][j]

    if size <= 0:
        return

    arr[i][j] = 0

    for dir in range(4):
        for dist in range(1, size):
            ni = i + di[dir] * dist
            nj = j + dj[dir] * dist
            if 0 <= ni < n and 0 <= nj < n:
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
    # Check for pairs in rows
    for i in range(n):
        for j in range(n - 1):
            if arr[i][j] != 0 and arr[i][j] == arr[i][j + 1]:
                cnt += 1

    # Check for pairs in columns
    for j in range(n):
        for i in range(n - 1):
            if arr[i][j] != 0 and arr[i][j] == arr[i + 1][j]:
                cnt += 1

    return cnt

def simulate_explosion(arr, n):
    ans = 0
    for i in range(n):
        for j in range(n):
            new_arr = [row[:] for row in arr]
            if new_arr[i][j] != 0:
                explode(new_arr, i, j)
                gravity(new_arr)
                ans = max(ans, find_ans(new_arr))
    return ans

print(simulate_explosion(arr, n))