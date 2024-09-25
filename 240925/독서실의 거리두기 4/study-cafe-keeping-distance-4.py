n = int(input())
people = list(map(int, input()))

# 0인곳 다 찾아서 조합내자고
zeros = []

for i in range(n):
    if people[i] == 0:
        zeros.append(i)

import itertools
new_team = itertools.combinations(zeros, 2)

def find_min_dist(arr):
    temp_dist = float('inf')
    for i in range(len(arr)):
        if arr[i] == 1:
            for j in range(i+1, len(arr)):
                if arr[j] == 1:
                    temp_dist = min(temp_dist, j - i)
                    break;
    return temp_dist

ans = 0

for p1, p2 in new_team:
    people[p1] = 1
    people[p2] = 1

    ans = max(ans, find_min_dist(people))

    people[p1] = 0
    people[p2] = 0

print(ans)