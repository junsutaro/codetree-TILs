n = int(input())

def find_ans(n):
    ans = 0

    for i in range(1, 10000):
        max_dist = 0
        if i % 2 == 1:
            max_dist += (1 + (i + 1) // 2) * ((i + 1) // 2)
            max_dist -= (i + 1) // 2
        else:
            max_dist += (1 + i // 2) * (i // 2)

        if max_dist >= n:
            ans = i
            break

    print(ans)


find_ans(n)