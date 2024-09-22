n = int(input())
arr = [tuple(map(int, input().split())) for _ in range(n)]

count = [True] * (n + 1)
for i in range(n-1):
    for j in range(i + 1, n):
        x1, x2 = arr[i]
        y1, y2 = arr[j]

        # if (x1 >= y1) == (x2 <= y2)
        if (x1 >= y1 and x2 <= y2) or (x1 <= y1 and x2 >= y2):
            count[i] = False
            count[j] = False

print(sum(count) - 1)