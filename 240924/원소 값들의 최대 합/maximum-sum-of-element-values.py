n, m = map(int, input().split())
numbers = list(map(int, input().split()))

ans = 0

for i in range(1, n+1):
    # print("i", i)
    sum_val = 0
    idx = i
    for _ in range(m):
        # print(numbers[idx-1], end=' ')
        sum_val += numbers[idx - 1]
        idx = numbers[idx - 1]
        

    ans = max(ans, sum_val)
    # print()

print(ans)