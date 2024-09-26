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
    for i in range(1, len(occs)):
        dist = min(dist, occs[i] - occs[i-1])
    ans = max(ans, dist)

    if 0 in empties:
        ans = max(occs[1] - 0)
    if n-1 in empties:
        ans = max(n-1 - occs[-1])

print(ans)