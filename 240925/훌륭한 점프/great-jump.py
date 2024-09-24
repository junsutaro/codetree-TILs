n, k = map(int, input().split())
stones = list(map(int, input().split()))

def is_possible(max_num):
    possibles = []
    for i, elem in enumerate(stones):
        if elem <= max_num:
            possibles.append(i)

    num_of_pos = len(possibles)

    if not possibles or possibles[0] != 0 or possibles[-1] != n-1:
        return False

    for idx in range(1, num_of_pos):
        if possibles[idx] - possibles[idx-1] > k:
            return False

    return True


ans = float('inf')

for i in range(1, max(stones)+1):
    if is_possible(i):
        ans = i
        break

print(ans)