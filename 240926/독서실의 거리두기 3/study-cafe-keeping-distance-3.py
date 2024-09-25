n = int(input())
seats = list(map(int, input()))

def find_min_dist(arr):

    before_idx = 0
    now_idx = 0
    temp_dist = 1000

    while now_idx < len(arr) - 1:
        now_idx += 1
        if arr[now_idx] == 1:
            temp_dist = min(temp_dist, now_idx - before_idx)
            before_idx = now_idx

    return temp_dist
    

ans = 0

idx = 0
while idx < n-1:
    if seats[idx] == 0:
        seats[idx] = 1
        ans = max(ans, find_min_dist(seats))
        seats[idx] = 0
    idx += 1

print(ans)