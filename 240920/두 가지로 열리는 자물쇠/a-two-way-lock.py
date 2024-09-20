n = int(input())

a1, b1, c1 = tuple(map(int, input().split()))
a2, b2, c2 = tuple(map(int, input().split()))

cnt = 0

for i in range(n):
    for j in range(n):
        for k in range(n):
            if ( ( abs(a1 - i) <= 2 or abs(a1 - i) >= n - 2 ) 
                and ( abs(b1 - j) <= 2 or abs(b1 - j) >= n - 2 )
                and ( abs(c1 - k) <= 2 or abs(c1 - k) >= n - 2 )):
                cnt += 1
            elif ( ( abs(a2 - i) <= 2 or abs(a2 - i) >= n - 2 ) 
                and ( abs(b2 - j) <= 2 or abs(b2 - j) >= n - 2 )
                and ( abs(c2 - k) <= 2 or abs(c2 - k) >= n - 2 )):
                cnt += 1

print(cnt)