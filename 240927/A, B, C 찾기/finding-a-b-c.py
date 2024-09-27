arr = list(map(int, input().split()))

arr.sort()

A = arr[0] # 2
B = arr[0] # 2


C = arr[6] - B - A

print(A, B, C)