lst = list(map(int, input().split()))

lst.sort()

a, b, c = lst

ans = 0
if c - b >= 3 or b - a >= 3:
    ans = 2 
if c - b == 2 or b - a == 2:
    ans = 1

print(ans)