import bisect

T, a, b = map(int, input().split())

S_positions = []
N_positions = []

for _ in range(T):
    c, x = input().split()
    x = int(x)
    if c == 'S':
        S_positions.append(x)
    else:
        N_positions.append(x)

S_positions.sort()
N_positions.sort()

def closest_distance(positions, x):
    index = bisect.bisect_left(positions, x)
    if index == 0:
        return abs(positions[0] - x)
    elif index == len(positions):
        return abs(positions[-1] - x)
    else:
        return min(abs(positions[index - 1] - x), abs(positions[index] - x))

count = 0
for x in range(a, b + 1):
    d1 = closest_distance(S_positions, x)
    d2 = closest_distance(N_positions, x)
    if d1 <= d2:
        count += 1

print(count)