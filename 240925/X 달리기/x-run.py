n = int(input())

ans = 0

if n <= 110:
    for i in range(1, 21):
        max_dist = 0
        if i % 2 == 1:
            max_dist += (1 + (i + 1) // 2) * ((i + 1) // 2)
            max_dist -= (i + 1) // 2
        else:
            max_dist += (1 + i // 2) * (i // 2)

        if max_dist >= n:
            ans = i
            break

else:
    ans = 21 + ((n - 110) // 10)

print(ans)