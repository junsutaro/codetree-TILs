# Based on the analysis of the user's current solution, let's modify the code to address the issues identified:
# - Adding proper boundary checks in the explosion
# - Implementing a gravity function that correctly shifts numbers down
# - Improving the pair-counting function to avoid miscounts

n = 4
arr = [
    [1, 2, 4, 3],
    [3, 2, 2, 3],
    [3, 1, 6, 2],
    [4, 5, 4, 4]
]

def explode(arr, i, j):
    di = [-1, 0, 1, 0]
    dj = [0, 1, 0, -1]
    size = arr[i][j]

    # Ensure that the size is valid and not already exploded
    if size <= 0:
        return

    # Explode the center
    arr[i][j] = 0

    # Explode in all 4 directions
    for dir in range(4):
        for dist in range(1, size):  # 1 to size-1 range for explosion
            ni = i + di[dir] * dist
            nj = j + dj[dir] * dist
            if 0 <= ni < n and 0 <= nj < n:  # Boundary check
                arr[ni][nj] = 0

def gravity(arr):
    # Apply gravity to each column
    for j in range(n):
        index = n - 1
        for i in range(n - 1, -1, -1):
            if arr[i][j] != 0:
                arr[index][j] = arr[i][j]
                if index != i:
                    arr[i][j] = 0  # Clear the moved value
                index -= 1

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
            new_arr = [row[:] for row in arr]  # Deep copy of the grid
            if new_arr[i][j] != 0:
                explode(new_arr, i, j)  # Explode
                gravity(new_arr)  # Apply gravity
                ans = max(ans, find_ans(new_arr))  # Update max pair count
    return ans

# Run the simulation with the given array
result = simulate_explosion(arr, n)
print(result)