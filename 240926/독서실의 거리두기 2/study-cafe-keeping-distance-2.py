n = int(input())
seats = list(map(int, input()))

occs = [i for i, seat in enumerate(seats) if seat == 1]
empties = [i for i, seat in enumerate(seats) if seat == 0]

ans = 0

for empty in empties:
    new_occs = occs[:]
    new_occs.append(empty)
    new_occs.sort()

    dist = float('inf')
    for i in range(1, len(new_occs)):
        dist = min(dist, new_occs[i] - new_occs[i-1])
    ans = max(ans, dist)

    if 0 in empties:
        ans = max(ans, new_occs[0])

    if n-1 in empties:
        ans = max(ans, n-1 - new_occs[-1])

print(ans)