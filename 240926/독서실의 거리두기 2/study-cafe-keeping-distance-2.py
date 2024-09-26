n = int(input())
seats = list(map(int, input()))

ans = 0

def find_ans(arr):    
    dist = float('inf')

    for i in range(n-1):
        if arr[i] == 1:
            for j in range(i + 1, n):
                if arr[j] == 1:
                    dist = min(j - i, dist)
                    break
    return dist

for i in range(n):
    if seats[i] == 0:
        seats[i] = 1
        ans = max(ans, find_ans(seats))
        seats[i] = 0

print(ans)