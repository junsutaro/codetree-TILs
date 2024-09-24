n = int(input())
arr = list(map(int ,input().split()))


ans = 100000

for i in range(n):
    arr[i] *= 2

    for j in range(n):
        new_arr = []

        for k in range(n):
            if k != j:
                new_arr.append(arr[k])

        sum_diff = 0
        for k in range(n-2):
            sum_diff += abs(new_arr[k] - new_arr[k+1])

        ans = min(sum_diff, ans)

    arr[i] //= 2

print(ans)