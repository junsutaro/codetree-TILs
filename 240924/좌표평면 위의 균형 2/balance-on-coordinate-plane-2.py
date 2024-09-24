n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]


ans = float('inf')

for x in range(0, 101, 2):
    for y in range(0, 101, 2):
        LU = 0
        RU = 0
        LD = 0
        RD = 0
        
        for px, py in points:
            if px < x and py < y:
                LD += 1
            elif px < x and py > y:
                LU += 1
            elif px > x and py < y:
                RD += 1
            elif px > x and py > y:
                RU += 1
        
        ans = min(ans, max(LD, LU, RU, RD))

print(ans)