N = int(input())

numbers = list(map(int, input().split()))

def apply_absolute(list):
    for i in range(len(list)):
        list[i] = abs(list[i])

apply_absolute(numbers)

print(*numbers)